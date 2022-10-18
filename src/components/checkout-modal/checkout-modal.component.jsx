import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CartItems } from "../cart-items/cart-items.component";
import { useSelector } from "react-redux";
import { VerifyPhone } from "../verify-phone/verify-phone.component";
import { CouponInput } from "../coupon-input/coupon-input.component";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CurrentTotal } from "../current-total/current-total.component";
import "./checkout-modal.styles.scss";
import { muiStyle } from "./muiStyles";
import { PaymentSection } from "../payment-section/payment-section.component";

export default function CheckoutModal() {
  // Modal related:
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Phone verification related:
  const verificationStatus = useSelector((state) => state.phoneVerify.status);

  // Payment intent related:
  const currentCart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="checkout-button" onClick={handleOpen}>
        <div className="payment-call">Checkout Now</div>
        <CurrentTotal />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={muiStyle}>
          <Accordion>
            <AccordionSummary>Your cart</AccordionSummary>
            <AccordionDetails>
              <CartItems showEmpty />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Coupons and discounts</AccordionSummary>
            <AccordionDetails>
              <CouponInput />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              Confirm your name and phone number
              <div className="checkmark">
                {verificationStatus === "verified" ? <CheckCircleIcon /> : null}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {verificationStatus !== "verified" ? (
                <VerifyPhone />
              ) : (
                <div>
                  Thanks for verifying your number. Let's get this pizza on the
                  way!
                </div>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              Payment (${currentCart.cartTotal})
            </AccordionSummary>
            <AccordionDetails>
              <PaymentSection />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Modal>
    </div>
  );
}
