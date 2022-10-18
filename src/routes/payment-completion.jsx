import styled from 'styled-components'
import { Link } from "react-router-dom";

const SuccessBlock = styled.div`
text-align: center;
width: 50%;
margin: 300px auto;
padding: 10px;
background-color: whitesmoke;
border: 1px solid darkgrey;
`

export const PaymentCompletion = () => {
 // Placeholder, would make this a protected route and also cover alternative situations (e.g. payment declined)
  return (
    <SuccessBlock>
            Thanks for your order. We've sent a receipt link to your verified phone number.
            Any issues? Contact us on 0800 83 83 83.       
            <p>Hungry and want to make another order? <Link to="/">Click here</Link></p>
    </SuccessBlock>
  );
};
