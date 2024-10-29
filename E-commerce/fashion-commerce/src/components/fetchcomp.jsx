import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemActions, fetchActions } from "../store";
import LoadingSpinner from "./loadingSpinner";

const Fetchcomp = () => {
  const fetchstatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchstatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchActions.fetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchActions.fetchDone());
        dispatch(fetchActions.fetchingEnded());
        dispatch(itemActions.addItems(items));
      });

    return () => {
      controller.abort();
    }
  }, [fetch]);



  return (
    <div className="spinnercomp">
      {fetchstatus.fetching && <LoadingSpinner></LoadingSpinner>}
    </div>);

}



export default Fetchcomp;