import { createSlice } from "@reduxjs/toolkit";
import { userFetch } from "./userActions";

const initialState = {
  loading: false,
  userInfo: null,
  error: "",
  success: false,
};
const logoutAction = (state) => {
  state = { ...initialState };
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: logoutAction,
  },
  extraReducers: (builder) => {
    builder.addCase(userFetch.pending, (state, { payload }) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(userFetch.fulfilled, (state, { payload: { data } }) => {
      state.loading = false;
      state.userInfo = data;
      state.success = true;
    });
    builder.addCase(userFetch.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
