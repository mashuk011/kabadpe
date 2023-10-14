import axios from "axios";

export const BASE_URL = "http://localhost:3333";

export const signup = async (data) => {
  const apiUrl = BASE_URL + `/signup`;
  const res = await axios.post(apiUrl, data); 
  return res;
};
export const login = async (data) => {
  const apiUrl = BASE_URL + `/login`;
  const res = await axios.post(apiUrl, data);
  return res;
};
export const verifysignup = async (data) => {
  const apiUrl = BASE_URL + `/verifysignup`;
  const res = await axios.post(apiUrl, data);
  return res;
};