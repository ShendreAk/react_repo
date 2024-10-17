const redux = require('redux');


const INIT_VAL = {
  counter: 0,
}
// reducer
const reducer = (store = INIT_VAL, action) => {
  let newStore = store;
  if (action.type === 'INCREAMENT') {
    newStore = { counter: store.counter + 1 }
  }
  else if (action.type === 'DECREAMENT') {
    newStore = { counter: store.counter - 1 }
  }
  return newStore;
}
// store
const store = redux.createStore(reducer);

// subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
}

// establishing connection b/w subscriber and store
store.subscribe(subscriber);

// action
store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'DECREAMENT' });
store.dispatch({ type: 'DECREAMENT' });
store.dispatch({ type: 'DECREAMENT' });
store.dispatch({ type: 'DECREAMENT' });


