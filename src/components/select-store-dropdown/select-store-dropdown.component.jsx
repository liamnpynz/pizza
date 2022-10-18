import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export const SelectStoreDropdown = () => {
  const currentStore = useSelector((state) => state.cart.pizzaStoreObject);
  const handleChange = () => {};

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Store</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentStore.storeDetails}
        label="Store"
        onChange={handleChange}
      >
        <MenuItem value={currentStore.storeDetails}>
          {currentStore.storeDetails}
        </MenuItem>
      </Select>
    </FormControl>
  );
};
