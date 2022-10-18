import { useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";

export const CurrentTotal = () => {
  const currentCartTotal = useSelector((state) => state.cart.cartTotal);
  const costUpdated = useSelector(
    (state) => state.cart.server_response_received
  );

  return (
    <>
      {costUpdated ? (
        <>${currentCartTotal}</>
      ) : (
        <LinearProgress
          style={{ backgroundColor: "white", height: "10px", width: "40px" }}
        />
      )}
    </>
  );
};
