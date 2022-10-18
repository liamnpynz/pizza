import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AcceptStripePayment } from "../stripe-payment/stripe-payment.component";

const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(stripeKey);

export const StripeProvider = () => {
  // Retrieving cookie set by PaymentSection useEffect.
  const sec = JSON.parse(document.cookie.split("=")[1]);

  const options = {
    clientSecret: sec.client_secret,
    appearance: {
      /*...*/
    },
  };

  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <AcceptStripePayment />
      </Elements>
    </div>
  );
};
