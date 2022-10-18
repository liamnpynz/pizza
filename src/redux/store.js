import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";
import cartReducer from "./cartSlice";
import phoneVerifyReducer from "./phoneVerifySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import thunk from "redux-thunk";

const persistConfig = {
  key: "total",
  storage,
  stateReconciler: hardSet,
};

const totalReducer = combineReducers({
  pizza: pizzaReducer,
  cart: cartReducer,
  phoneVerify: phoneVerifyReducer,
});

const persistedReducer = persistReducer(persistConfig, totalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
