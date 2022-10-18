import "./cart-item.styles.scss";
import { useDispatch } from "react-redux";
import { productIncremented, productDecremented } from "../../redux/cartSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const incrementHandler = () => {dispatch(productIncremented(item));};
  const decrementHandler = () => {dispatch(productDecremented(item));};

  const controlStyles = {
    color: "darkgrey",
    width: "20px",
    paddingTop: "1px",
    cursor: "pointer",
  };

  return (
    <div className="cart-item">
      <div className="add-remove-controls">
        <RemoveCircleOutlineIcon
          style={controlStyles}
          onClick={() => decrementHandler()}
        />
        <div className="quantity">{item.quantity}</div>
        <AddCircleOutlineIcon
          style={controlStyles}
          onClick={() => incrementHandler()}
        />
      </div>
      <div className="product-details">
        <span className="product-name">
          {item.size.display} {item.name}
        </span>
        <br />
        <span className="crust-name">{item.crust.display}</span>
      </div>
      <div className="total-price">
        $
        {(
          (item.price + item.crust.price_diff + item.size.price_diff) *
          item.quantity
        ).toFixed(2)}
      </div>
    </div>
  );
};
