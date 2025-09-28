import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./services/chat/chatApi";

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    // aqui se agregaran los reducers para manejar el estado global
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
