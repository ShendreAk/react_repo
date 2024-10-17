import { createStore } from "redux"
let INIT_VAL = { counter: 0, privacy: false };

const reducer = (store = INIT_VAL, action) => {
  if (action.type === "INCREAMENT") {
    console.log(store);
    return { ...store, counter: store.counter + 1 };
  }
  else if (action.type === "DECREAMENT") {
    console.log(store);
    return { ...store, counter: store.counter - 1 };
  }
  else if (action.type === "ADD") {
    console.log(store);
    return { ...store, counter: store.counter + Number(action.payload.num) };
  }
  else if (action.type === "SUB") {
    console.log(store);
    return { ...store, counter: store.counter - Number(action.payload.num) };
  }
  else if (action.type === "PRIVACY") {
    console.log(store.privacy);
    console.log(store);
    return { ...store, privacy: !store.privacy };
  }

  return store
}
const dataStore = createStore(reducer);
export default dataStore;
