import { API_URL } from "@/constants";
import type {
  ChatRequest,
  ChatResponse,
} from "@/types/chatbot/chatbot-response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatApi",
  tagTypes: ["Chat"],
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation<ChatResponse, ChatRequest>({
      query: (newMessage) => ({
        url: "/webhook/chatbot",
        method: "POST",
        body: newMessage,
      }),
      invalidatesTags: ["Chat"],
    }),
  }),
});

export const { useSendMessageMutation } = chatApi;
