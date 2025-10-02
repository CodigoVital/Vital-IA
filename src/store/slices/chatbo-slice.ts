import type { Message } from "@/types/messages/messages-types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ChatState {
  messages: Message[];
  input: string;
  sessionId: string;
  isAnimating?: boolean;
}

const initialState: ChatState = {
  messages: [],
  input: "",
  sessionId: "2131n12",
  isAnimating: false,
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

    resetChat: (state) => {
      state.messages = [];
      state.input = "";
      state.sessionId = uuidv4();
    },
    handleChangeAnimatingStatus: (state, action: PayloadAction<boolean>) => {
      state.isAnimating = action.payload;
    },
  },
});

export const {
  setInput,
  clearInput,
  addMessage,
  updateMessage,
  resetChat,
  handleChangeAnimatingStatus,
} = chatbotSlice.actions;

export default chatbotSlice.reducer;
