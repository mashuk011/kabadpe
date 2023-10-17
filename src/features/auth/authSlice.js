import { createSlice } from "@reduxjs/toolkit";
import {
  removeFromLocalStorage,
  setInLocalStorage,
} from "../../lib/localStorage";
import { userLogin, userSignup, userVerifySignup } from "./authActions";

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
      state = {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state = {
        ...state,
        loading: {
          ...state.loading,
          login: true,
        },
        error: "",
      };
    });
    builder.addCase(userLogin.fulfilled, (state, { payload: { data } }) => {
      setInLocalStorage("token", data?.token);
      state = {
        ...state,
        loading: {
          ...state.loading,
          login: false,
        },
        success: {
          ...state.success,
          login: true,
        },
        user: data?.user,
        token: data?.token,
        error: "",
      };
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state = {
        ...state,
        loading: {
          ...state.loading,
          login: true,
        },
        success: {
          ...state.success,
          login: false,
        },
        error: payload,
      };
    });
    builder.addCase(userSignup.pending, (state, { payload }) => {
      state.loading.signup = true;
      state.error = "";
    });
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
      state.loading.signup = false;
      state.success.signup = true;
    });
    builder.addCase(userSignup.rejected, (state, { payload }) => {
      state.loading.signup = false;
      state.error = payload;
    });
    builder.addCase(userVerifySignup.pending, (state, { payload }) => {
      state.loading.verifySignup = true;
      state.error = "";
    });
    builder.addCase(userVerifySignup.fulfilled, (state, { payload }) => {
      state.loading.verifySignup = false;
      state.success.verifySignup = true;
    });
    builder.addCase(userVerifySignup.rejected, (state, { payload }) => {
      state.loading.signup = false;
      state.error = payload;
    });
  },
});
export const { clearToken } = authSlice.actions;
export default authSlice.reducer;
