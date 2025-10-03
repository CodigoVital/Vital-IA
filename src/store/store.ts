import { configureStore } from "@reduxjs/toolkit";
import { chatApi } from "./services/chat/chatApi";
import chatbotReducer from "./slices/chatbot/chatbot-slice";
import textAnimationReducer from "./slices/chatbot/text-animation-slice";
import { authApi } from "./services/auth/authApi";
import { authSlice } from "./slices/auth/auth-slice";

export const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    chatBot: chatbotReducer,
    textAnimation: textAnimationReducer,
    authSlice: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
