import React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./stripe-payment.styles.scss";

export const AcceptStripePayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentCart = useSelector((state) => state.cart);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/paymentcompletion",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{color: "green"}}><i>Here to test? Enter 4242 4242 4242 4242 as the card number, any future date as the expiry date, and 000 as the CVC. No payment will occur, but you'll see the success flow.</i></p>
      <PaymentElement />
      <button
        disabled={!stripe}
        className="pay-button"
        style={{ textAlign: "justify", minHeight: "30px", margin: "5px" }}
      >
        Order Now (${currentCart.cartTotal})
      </button>

      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
