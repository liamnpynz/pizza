import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SelectStoreDropdown } from "../select-store-dropdown/select-store-dropdown.component";
import { useSelector } from "react-redux";
import { boxStyle, locationIconStyle } from "./muiStyles";

export const SelectStoreModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentStore = useSelector((state) => state.cart.pizzaStoreObject);

  return (
    <div>
      <div onClick={handleOpen} style={{ cursor: "pointer" }}>
        <LocationOnIcon style={locationIconStyle} />
        Ordering for pickup from <u>{currentStore.storeDetails}</u>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <Accordion expanded>
            <AccordionSummary>Your store</AccordionSummary>
            <AccordionDetails>
              <SelectStoreDropdown />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Modal>
    </div>
  );
};
