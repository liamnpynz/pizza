import "./pizza-header.styles.scss";
import { SelectStoreModal } from "../select-store-modal/select-store-modal.component";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartModal } from "../shopping-cart-modal/shopping-cart-modal.component";

export const PizzaHeader = () => {
  return (
    <div className="pizza-header">
      <div className="logo-area">
        Pizza<span style={{ color: "darkred" }}>Town</span>
      </div>

      <div className="delivery-details-area">
        <SelectStoreModal />
        <div className="time-area">
          <AccessTimeIcon
            style={{
              color: "darkred",
              width: "14px",
              marginTop: "3px",
              marginBottom: "-7px",
              marginLeft: "10px",
            }}
          />{" "}
          ASAP (30 mins)
        </div>
        <ShoppingCartModal />
      </div>
      
    </div>
  );
};
