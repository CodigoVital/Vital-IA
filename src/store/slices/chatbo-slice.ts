import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

export const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {},
});
