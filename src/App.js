import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { useEffect } from "react";
import { fetchPizza } from '../src/redux/pizzaSlice'
import {store} from "../src/redux/store"
import { PaymentCompletion } from "./routes/payment-completion";

function App() {
  useEffect(() => {
    store.dispatch(fetchPizza)
  },[])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paymentcompletion" element={<PaymentCompletion />} />
    </Routes>
  );
}

export default App;
