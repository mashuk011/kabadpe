import axios from "axios";
import { getFromLocalStorage } from "../lib/localStorage";

export const getUser = async () => {
  const apiUrl = ENV_API_BASE_URL + `/user`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
