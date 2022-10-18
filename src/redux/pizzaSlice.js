import { createSlice } from "@reduxjs/toolkit";
import { PIZZAS } from "../variable_data/pizzas";
const axios = require("axios").default;

const initialState = PIZZAS;

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizzasAdded(state, action) {
      const { payload } = action;
      state.pizzas = payload;
    },
    crustChanged(state, action) {
      const existingItem = state.pizzas.find(
        (pizza) => pizza.id === action.payload.currentPizza.id
      );
      existingItem.crust = action.payload.crust;
    },
    sizeChanged(state, action) {
      const existingItem = state.pizzas.find(
        (pizza) => pizza.id === action.payload.currentPizza.id
      );
      existingItem.size = action.payload.size;
    },
  },
});

export async function fetchPizza(dispatch, getState) {
  const response = await axios.get("http://localhost:4342/");
  dispatch({ type: "pizza/pizzasAdded", payload: response.data.pizzas });
}

export const { crustChanged, sizeChanged } = pizzaSlice.actions;

export default pizzaSlice.reducer;
