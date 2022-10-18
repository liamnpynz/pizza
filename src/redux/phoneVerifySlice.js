import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not_started",
  phone_number: "",
  users_name: "",
  verification_token: "",
};

export const phoneVerifySlice = createSlice({
  name: "phoneVerify",
  initialState,
  reducers: {
    phoneSentToServer(state, action) {
      state.phone_number = action.payload.phone_number;
      state.status = "sent_to_server";
      state.users_name = action.payload.users_name;
    },
    phoneVerificationTokenReceived(state, action) {
      state.status = "server_waiting";
      state.verification_token = action.payload;
    },
    phoneNumberVerificationResponse(state, action) {
      if (action.payload.status === "approved") {
        state.status = "verified";
      } else {
        state.status = "not_started";
      }
    },
  },
});

export const {
  phoneSentToServer,
  phoneNumberVerificationResponse,
  phoneVerificationTokenReceived,
} = phoneVerifySlice.actions;

export default phoneVerifySlice.reducer;
