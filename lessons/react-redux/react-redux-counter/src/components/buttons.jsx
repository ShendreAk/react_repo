import { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();
  const handleInput = useRef();

  const handleIncreament = () => {
    dispatch({ type: 'INCREAMENT' })
  }
  const handleDecreament = () => {
    dispatch({ type: 'DECREAMENT' })
  }
  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: { num: handleInput.current.value } });
    handleInput.current.value = "";
  }
  const handleSub = () => {
    dispatch({ type: 'SUB', payload: { num: handleInput.current.value } });
    handleInput.current.value = "";
  }
  const handlePrivacy = () => {
    dispatch({ type: 'PRIVACY' })
  }
  return <div>
    <div className="input">
      <input type="text" placeholder="Enter number" ref={handleInput} styles={{ width: "110px" }} />
      <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
      <button type="button" className="btn btn-danger" onClick={handleSub}>Subtract</button>
      <button type="button" className="btn btn-warning privacy" onClick={handlePrivacy}>Privacy Button</button>
    </div>
    <button type="button" className="btn btn-success buttons" onClick={handleIncreament}>+1</button>
    <button type="button" className="btn btn-danger buttons" onClick={handleDecreament}>-1</button>
  </div>
}
export default Buttons;