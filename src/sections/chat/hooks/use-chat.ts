import { useAppDispatch, useAppSelector } from "@/hooks/use-selector";
import {
  clearInput,
  addMessage,
  updateMessage,
  setInput,
} from "@/store/slices/chatbo-slice";
import { useSendMessageMutation } from "@/store/services/chat/chatApi";
import { v4 as uuidv4 } from "uuid";
import { useTransition } from "react";

const useChat = () => {
  const dispatch = useAppDispatch();
  const { input, sessionId } = useAppSelector((state) => state.chatBot);
  const [sendMessage] = useSendMessageMutation();
  const [isPending, startTransition] = useTransition();

  const sendMessageFlow = (messageText: string) => {
    const tempId = uuidv4();
    dispatch(
      addMessage({
        id: tempId,
        text: messageText,
        sender: "user",
        pending: true,
      })
    );

    startTransition(async () => {
      try {
        dispatch(
          updateMessage({ id: tempId, text: messageText, pending: false })
        );
        const botTempId = uuidv4();
        dispatch(
          addMessage({ id: botTempId, text: "", sender: "bot", pending: true })
        );
        const response = await sendMessage({
          question: messageText,
          sessionId,
        }).unwrap();
        dispatch(
          updateMessage({
            id: botTempId,
            text: response.answer,
            pending: false,
          })
        );
      } catch {
        dispatch(
          updateMessage({ id: tempId, text: "Error al enviar", pending: false })
        );
      }
    });
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const messageText = input;
    dispatch(clearInput());
    sendMessageFlow(messageText);
  };

  const handleSendSuggestion = (suggestion: string) => {
    sendMessageFlow(suggestion);
  };

  return {
    input,
    dispatch,
    isPending,
    handleSend,
    setInput,
    handleSendSuggestion,
  };
};

export default useChat;
