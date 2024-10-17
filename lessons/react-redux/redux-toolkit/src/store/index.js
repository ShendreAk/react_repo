// import { createStore,  } from "redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increament: (state) => {
      state.counterVal++;
    },
    decreament: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.num);

    }

  }
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return state = !state;
    }
  }
})


const counterStore = configureStore({ reducer: { counter: counterSlice.reducer, privacy: privacySlice.reducer } });

export const counterActions = counterSlice.actions;

export const privacyActions = privacySlice.actions;

export default counterStore;
