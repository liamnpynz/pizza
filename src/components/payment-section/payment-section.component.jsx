import "./payment-section.styles.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { StripeProvider } from "../stripe-provider/stripe-provider.component";
const axios = require("axios").default;


export const PaymentSection = () => {
  const verificationStatus = useSelector((state) => state.phoneVerify.status);
  const phoneNumber = useSelector((state) => state.phoneVerify.phone_number);
  const cart = useSelector((state) => state.cart);
  const [readyForPaymentDisplay,setReadyForPaymentDisplay] = useState(false)

  useEffect(() => {
    if (verificationStatus === "verified") {
      const cartSenderCookieGetter = async () => {
        const results = await axios.post("http://localhost:4342/secret", cart);
        const setCookie = { client_secret: results.data.client_secret };
        const stringCookie = JSON.stringify(setCookie);
        document.cookie = "secret=" + stringCookie;        
      }
      cartSenderCookieGetter().then(() => {console.log("Cookie Set. Ready to load Stripe. Setting Ready for Payment Display:")
    setReadyForPaymentDisplay(true)});
     
    }},[cart, verificationStatus])

  return (
    <div>
      <div className="checkout-area">
        <div style={{ textAlign: "left" }}>
          {readyForPaymentDisplay !== true ? <div>Please verify your phone number to continue.</div> : 
            <><div className="confirming-number">Your number: {phoneNumber}</div>
          
         <StripeProvider /></>}
        </div>
      </div>
    </div>
  );
};
