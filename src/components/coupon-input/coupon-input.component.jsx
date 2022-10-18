import { useDispatch, useSelector } from "react-redux";
import { couponSubmitted, couponRemoved } from "../../redux/cartSlice";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

import "./coupon-input.styles.scss";

export const CouponInput = () => {
  const dispatch = useDispatch();
  const [couponState, setCouponState] = useState("");
  const submittedCoupon = useSelector((state) => state.cart.coupon_submitted);
  const receivedCouponMessage = useSelector(
    (state) => state.cart.coupon_response.coupon_message
  );

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    dispatch(couponSubmitted(couponState));
    setCouponState("");
  };

  const handleCouponClear = () => {
    dispatch(couponRemoved());
  };

  return (
    <div className="coupon-container">
      <div className="coupon-question">Do you have a coupon?</div>
      <form name="submit-coupon" onSubmit={(e) => handleCouponSubmit(e)}>
        <input
          className="coupon-input"
          type="text"
          placeholder="Enter your coupon here"
          value={couponState}
          onChange={(e) => setCouponState(e.target.value)}
        />
        {couponState.length > 0 ? (
          <button type="submit" className="apply-coupon-button">
            Apply
          </button>
        ) : null}
      </form>
      {submittedCoupon ? (
        <div>
          <ClearIcon
            onClick={() => handleCouponClear()}
            style={{
              color: "darkgrey",
              width: "15px",
              marginBottom: "-6px",
              cursor: "pointer",
            }}
          />
          {receivedCouponMessage}
        </div>
      ) : null}
      <div className="coupon-disclaimer">*one coupon per transaction only.</div>
    </div>
  );
};
