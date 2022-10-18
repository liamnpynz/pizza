import { useDispatch } from "react-redux";
import { cartEmptied } from "../../redux/cartSlice";
import "./empty-cart.styles.scss";

export const EmptyCart = () => {
  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch(cartEmptied());
  };

  return (
    <div className="empty-cart">
      Want to start over?{" "}
      <span
        onClick={() => emptyCartHandler()}
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Empty your cart
      </span>
    </div>
  );
};
