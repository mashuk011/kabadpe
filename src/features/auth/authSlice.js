import { createSlice } from "@reduxjs/toolkit";
import { removeFromLocalStorage } from "../../lib/localStorage";
import { userLogin, userSignup } from "./authActions";

const initialState = {
  loading: {
    login: false,
    signup: false,
    verifySignup: false,
  },
  token: "",
  error: "",
  success: {
    login: false,
    signup: false,
    verifySignup: false,
  },
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearToken: (state) => {
      removeFromLocalStorage("token");
      state.token = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(userSignup.pending, (state, { payload }) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user.business_name = payload.data.business_name;
      state.user.email = payload.data.email;
      state.user.phone_number = payload.data.phone_number;
      state.user.country = payload.data.country;
    });
    builder.addCase(userSignup.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export const { clearToken } = authSlice.actions;
export default authSlice.reducer;
