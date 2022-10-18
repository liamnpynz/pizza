import "./cart.styles.scss";
import { useSelector } from "react-redux";
import { CheckoutForm } from "../checkout-form/checkout-form.component";
import { CouponInput } from "../coupon-input/coupon-input.component";
import { CartItems } from "../cart-items/cart-items.component";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart">
      <div className="upper-cart">
        <div className="cart-title-container">
          <div className="cart-title">Your Cart</div>
        </div>
        <div className="empty-placeholder">
          {cartItems.length === 0 ? (
            <p>
              Your cart looks a little empty. Why not check out some of our
              unbeatable offers?
            </p>
          ) : null}
        </div>
      </div>
      <CartItems showEmptyCartOption />
      <div className="lower-cart">
        <CouponInput />
      </div>
      {cartItems.length > 0 ? <CheckoutForm /> : null}
    </div>
  );
};
