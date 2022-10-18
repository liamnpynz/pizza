import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../cart-item/cart-item.component";
import { EmptyCart } from "../empty-cart/empty-cart.component";
import { totalReceived, serverUpdateReceived, serverUpdateRequested } from "../../redux/cartSlice";
const axios = require("axios").default;

export const CartItems = (props) => {
    const displayEmptyCartOption = props.showEmptyCartOption;
    const dispatch = useDispatch();
    const currentCart = useSelector((state) => state.cart);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const coupon_submitted = useSelector((state) => state.cart.coupon_submitted);
  
    useEffect(() => {
      const updateTheServer = async () => {
        dispatch(serverUpdateRequested())
        await axios
          .post("http://localhost:4342/requestprice", currentCart)
          .then(function (response) {
            dispatch(totalReceived(response.data));
          });
      };
      updateTheServer().then(() => {dispatch(serverUpdateReceived())})
      },[cartItems, coupon_submitted]);

    return (
        <div className="cart-contents">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.uniqueID} item={cartItem} />
            ))}
          {displayEmptyCartOption ? <EmptyCart /> : null}
          </>
        ) : null}
      </div>
    )
}