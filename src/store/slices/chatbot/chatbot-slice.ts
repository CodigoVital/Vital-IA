import type { Message } from "@/types/messages/messages-types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ChatState {
  messages: Message[];
  input: string;
  sessionId: string;
  isPending: boolean;
  abortController: (() => void) | null;
}

const initialState: ChatState = {
  messages: [],
  input: "",
  isPending: false,
  sessionId: "2131n12",
  abortController: null,
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    clearInput: (state) => {
      state.input = "";
    },
    setAbortController: (state, action: PayloadAction<(() => void) | null>) => {
      state.abortController = action.payload;
    },
    setIsPending: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },

    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    updateMessage: (
      state,
      action: PayloadAction<{ id: string; text: string; pending?: boolean }>
    ) => {
      const msg = state.messages.find((m) => m.id === action.payload.id);
      if (msg) {
        msg.text = action.payload.text;
        msg.pending = action.payload.pending ?? false;
      }
    },
    removeMessage: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter((m) => m.id !== action.payload);
    },

    resetChat: (state) => {
      state.messages = [];
      state.input = "";
      state.sessionId = uuidv4();
    },
  },
});

export const {
  setInput,
  clearInput,
  addMessage,
  updateMessage,
  resetChat,
  removeMessage,
  setIsPending,
  setAbortController,
} = chatbotSlice.actions;

export default chatbotSlice.reducer;
