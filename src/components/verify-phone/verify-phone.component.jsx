import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import {
  phoneSentToServer,
  phoneNumberVerified,
  phoneVerificationTokenReceived,
  phoneNumberVerificationResponse,
} from "../../redux/phoneVerifySlice";
import { Grid } from "@mui/material";
import "./verify-phone.styles.scss";

const axios = require("axios").default;

export const VerifyPhone = () => {
  const dispatch = useDispatch();

  const verificationStatus = useSelector((state) => state.phoneVerify.status);
  const verificationNumber = useSelector(
    (state) => state.phoneVerify.phone_number
  );
  const verificationToken = useSelector(
    (state) => state.phoneVerify.verification_token
  );

  /////////////GET PHONE NUMBER//////////////

  const EnterPhoneNumber = () => {
    return (
      <div>
        <br />
        No accounts needed! Enter your name and phone number and we'll send you
        a code to enter.
        <p style={{ color: "green" }}>
          <i>
            Here to test? Enter any number. A verification code will{" "}
            <strong>not</strong> be sent, but you can continue seeing the flow.
          </i>
        </p>
        <br />
        <br />
        <form onSubmit={(e) => onPhoneNumberReceivedHandler(e)}>
          <div className="inputs-area">
            <div className="input-one">
              <TextField
                input="true"
                id="outlined-basic"
                label="Your name"
                variant="outlined"
                type="text"
                style={{ margin: "5px", maxWidth: "250px" }}
                name="users_name"
              />
            </div>
            <div className="input-sub">
              <TextField
                input="true"
                id="outlined-basic"
                label="Phone number (e.g. 614051234567)"
                variant="outlined"
                type="number"
                style={{ margin: "5px", maxWidth: "250px" }}
                name="phone_number"
              />
              <button className="verify-button" type="submit">
                Verify Now
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const onPhoneNumberReceivedHandler = async (e) => {
    e.preventDefault();
    const phone_number = e.target.phone_number.value;
    const users_name = e.target.users_name.value;
    const payload = { users_name: users_name, phone_number: phone_number };
    dispatch(phoneSentToServer(payload));
    const resp = await sendNumberToServer(payload);
    dispatch(phoneVerificationTokenReceived(resp.data.phone_token));
  };

  const sendNumberToServer = async (payload) => {
    return await axios.post("http://localhost:4342/phone", payload);
  };

  ////////// VERIFICATIONS //////////////

  const EnterVerificationCode = () => {
    return (
      <div>
        {verificationStatus === "server_waiting" ? (
          <>
            <p>
              <b>
                We've sent a text to {verificationNumber}. Please enter it
                within 5 minutes.
              </b>
            </p>
            <p style={{ color: "green" }}>
              <i>Here to test? Enter 123456 as the verification code.</i>
            </p>
          </>
        ) : null}
        <form onSubmit={(e) => onVerificationCodeEnteredHandler(e)}>
          <div style={{ display: "flex" }}>
            <TextField
              id="outlined-basic"
              label="6-digit verification code"
              variant="outlined"
              type="number"
              style={{ margin: "5px" }}
              name="verification"
            />
            <button className="verify-button" type="submit">
              Confirm Code
            </button>
          </div>
        </form>
      </div>
    );
  };

  const onVerificationCodeEnteredHandler = async (e) => {
    e.preventDefault();
    const obj = {
      phone_number: verificationNumber,
      verification_token: verificationToken,
      code: e.target.verification.value,
    };
    const resp = await sendVerificationCodeToServer(obj);
    dispatch(phoneNumberVerificationResponse(resp.data));
  };

  const sendVerificationCodeToServer = async (obj) => {
    return await axios.post("http://localhost:4342/phoneverify", obj);
  };

  ////////////////////////////////////////

  const Response = () => {
    if (verificationStatus === "not_started") {
      return <EnterPhoneNumber />;
    }
    if (verificationStatus === "server_waiting") {
      return <EnterVerificationCode />;
    }
  };

  return (
    <div>
      <Response />
    </div>
  );
};
