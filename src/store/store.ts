import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./services/chat/chatApi";
import chatbotReducer from "./slices/chatbo-slice";

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    chatBot: chatbotReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
