import { configureStore, createSlice } from "@reduxjs/toolkit";


const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (store, action) => {
      return action.payload;
    }
  }
})

const fetchSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, fetching: false },
  reducers: {
    fetchDone: (state) => {
      state.fetchDone = true;
    },
    fetchingStarted: (state) => {
      state.fetching = true;
    },
    fetchingEnded: (state) => {
      state.fetching = false;
    }
  }
})



// cartSlice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCartItems: (state, action) => {
      let newState = state;
      console.log(action.payload);
      newState = [...state, action.payload];
      return newState;
    },
    deleteCartItem: (state, action) => {
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload.id);
    }
  }
})
const cartSummarySlice = createSlice({
  name: 'summary',
  initialState: {
    currentMRP: 0,
    originalMRP: 0,
    discount: 0,
    totalItems: 0,
    totalAmount: 0
  },
  reducers: {
    editaddSummary: (state, action) => {
      console.log("summary:", action.payload);
      let original_MRP = state.originalMRP + action.payload.original_price;
      let current_MRP = state.currentMRP + action.payload.current_price;
      let discountOnItems = original_MRP - current_MRP
      let total_Amount = (original_MRP + 99) - discountOnItems;
      state.currentMRP = current_MRP;
      state.originalMRP = original_MRP;
      state.discount = discountOnItems;
      state.totalItems = state.totalItems++;
      state.totalAmount = total_Amount

    },
    editsubSummary: (state, action) => {
      console.log("summary:", action.payload);
      let original_MRP = state.originalMRP - action.payload.original_price;
      let current_MRP = state.currentMRP - action.payload.current_price;
      let discountOnItems = original_MRP - current_MRP;
      let total_Amount = (original_MRP + 99) - discountOnItems;
      state.currentMRP = current_MRP;
      state.originalMRP = original_MRP;
      state.discount = discountOnItems;
      state.totalItems = state.totalItems++;
      state.totalAmount = total_Amount
    }
  }
});

const fashionStore = configureStore({ reducer: { items: itemsSlice.reducer, fetchStatus: fetchSlice.reducer, cart: cartSlice.reducer, summary: cartSummarySlice.reducer } });
export const itemActions = itemsSlice.actions;
export const fetchActions = fetchSlice.actions;
export const cartActions = cartSlice.actions;
export const summaryActions = cartSummarySlice.actions;
export default fashionStore;


