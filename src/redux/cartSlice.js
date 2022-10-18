import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cartTotal: 0,
  cartItems: [],
  coupon_response: {
    coupon_status: "not_submitted",
    coupon_message: "",
  },
  coupon_submitted: "",
  cartOpen: true,
  pizzaStoreObject: { storeID: 1, storeDetails: "North Melbourne" },
  server_response_received: "false",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    serverUpdateRequested(state, action) {
      state.server_response_received = false;
    },
    pizzaStoreUpdated(state, action) {
      state.pizzaStoreObject = action.payload;
    },
    serverUpdateReceived(state, action) {
      state.server_response_received = true;
    },
    productAdded(state, action) {
      const { payload } = action;
      const isIdentical = state.cartItems.find(
        (item) =>
          item.id === payload.id &&
          item.crust.id === payload.crust.id &&
          item.size.id === payload.size.id
      );
      if (!isIdentical) {
        const uni = uuidv4();
        state.cartItems.push({ ...payload, quantity: 1, uniqueID: uni });
      } else {
        isIdentical.quantity += 1;
      }
    },
    productIncremented(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.uniqueID === action.payload.uniqueID
      );
      state.cartItems[existingItemIndex].quantity += 1;
    },
    productDecremented(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[existingItemIndex].quantity === 1) {
        state.cartItems.splice(existingItemIndex, 1);
      } else {
        state.cartItems[existingItemIndex].quantity -= 1;
      }
    },
    cartEmptied(state, action) {
      state.cartItems = [];
      state.cartTotal = 0;
    },
    couponSubmitted(state, action) {
      state.coupon_submitted = action.payload;
    },
    couponRemoved(state, action) {
      state.coupon_submitted = "";
      state.coupon_response = {
        coupon_status: "not_submitted",
        coupon_message: "",
      };
    },
    totalReceived(state, action) {
      state.cartTotal = action.payload.price;
      if (action.payload.coupon != undefined) {
        state.coupon_response.coupon_status =
          action.payload.coupon.coupon_status;
        state.coupon_response.coupon_message =
          action.payload.coupon.coupon_message;
      }
    },
  },
});

export const {
  serverUpdateReceived,
  serverUpdateRequested,
  productAdded,
  productIncremented,
  productDecremented,
  cartEmptied,
  totalReceived,
  couponSubmitted,
  couponRemoved,
  pizzaStoreUpdated,
} = cartSlice.actions;

export default cartSlice.reducer;
