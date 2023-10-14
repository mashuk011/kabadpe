import { login, signup, verifysignup } from "@/api/auth";
import { asyncThunk } from "../../lib/thunk";

export const userSignup = asyncThunk("auth/signup", signup);

export const userLogin = asyncThunk("auth/login", login);
// createAsyncThunk(
//   "auth/login",
//   async (data, { rejectWithValue }) => {
//     try {
//       const { data: res } = await login(data);
//       setInLocalStorage("token", res?.token);
//       return res;
//     } catch (error) {
//       return errorLogger(e, rejectWithValue);
//     }
//   }
// );
export const verifySignup = asyncThunk("auth/verifySignup", verifysignup);
// createAsyncThunk(
//   "auth/verifySignup",
//   async (data, { rejectWithValue }) => {
//     try {
//       const { data: res } = await verifysignup(data);
//       setInLocalStorage("token", res?.token);

//       return res;
//     } catch (e) {
//       return errorLogger(e, rejectWithValue);
//     }
//   }
// );
