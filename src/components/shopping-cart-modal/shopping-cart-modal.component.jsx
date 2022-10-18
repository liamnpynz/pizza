import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Cart } from "../cart/cart.component";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartIconStyles } from "./muiStyles";

export const ShoppingCartModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ShoppingCartIcon onClick={handleOpen} style={cartIconStyles} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Cart />
        </div>
      </Modal>
    </div>
  );
};
