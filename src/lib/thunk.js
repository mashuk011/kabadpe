import { createAsyncThunk } from "@reduxjs/toolkit";

function errorLogger(error, rejectWithValue) {
  if (error?.response?.data?.errors?.[0]?.message) {
    return rejectWithValue(error?.response?.data?.errors?.[0]?.message);
  } else {
    return rejectWithValue(error?.message);
  }
}

function initialSucesspayloadCreator(data) {
  return data;
}

export const asyncThunk = (
  reduxPath,
  api,
  sucessPayloadCreator = initialSucesspayloadCreator
) => {
  return createAsyncThunk(reduxPath, async (data, { rejectWithValue }) => {
    try {
      const res = await api(data);
      return sucessPayloadCreator(res);
    } catch (e) {
      return errorLogger(e, rejectWithValue);
    }
  });
};
