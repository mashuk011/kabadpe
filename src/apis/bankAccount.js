import axios from "axios";
import { resolvePromise } from "../lib/http";
import { getFromLocalStorage } from "../lib/localStorage";

export const userBankAccountFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/user/accountDetail`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.accountDetail;
});

export const userBankAccountAdd = resolvePromise(
  async ({ IFSCCode, accountNumber, accountHolderName, bankName }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/accountDetail`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { IFSCCode, accountNumber, accountHolderName, bankName },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userBankAccountUpdate = resolvePromise(
  async ({ IFSCCode, accountNumber, accountHolderName, bankName, id }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/accountDetail/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { IFSCCode, accountNumber, accountHolderName, bankName },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userBankAccountDelete = resolvePromise(async (id) => {
  const apiUrl = ENV_API_BASE_URL + `/user/accountDetail/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});

export const userCardDetailFetch = resolvePromise(async () => {
  const apiUrl = ENV_API_BASE_URL + `/user/cardDetail`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.cardDetail;
});

export const userCardDetailAdd = resolvePromise(
  async ({ CVV, cardNumber, cardHolderName, cardType, expiryDate }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/cardDetail`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.post(
      apiUrl,
      { CVV, cardNumber, cardHolderName, cardType, expiryDate },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userCardDetailUpdate = resolvePromise(
  async ({ CVV, cardNumber, cardHolderName, cardType, expiryDate, id }) => {
    const apiUrl = ENV_API_BASE_URL + `/user/cardDetail/${id}`;
    const token = getFromLocalStorage("token");
    const { data: res } = await axios.put(
      apiUrl,
      { CVV, cardNumber, cardHolderName, cardType, expiryDate },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res?.message;
  }
);

export const userCardDetailDelete = resolvePromise(async (id) => {
  const apiUrl = ENV_API_BASE_URL + `/user/cardDetail/${id}`;
  const token = getFromLocalStorage("token");
  const { data: res } = await axios.delete(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res?.message;
});
