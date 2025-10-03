import { useAppDispatch, useAppSelector } from "@/hooks/use-selector";
import {
  clearInput,
  addMessage,
  updateMessage,
  setInput,
  setIsPending,
  setAbortController,
} from "@/store/slices/chatbot-slice";
import { useSendMessageMutation } from "@/store/services/chat/chatApi";
import { v4 as uuidv4 } from "uuid";
import { cancelAnimation } from "@/store/slices/text-animation-slice";

const useChat = () => {
  const dispatch = useAppDispatch();
  const { input, sessionId, abortController } = useAppSelector(
    (state) => state.chatBot
  );
  const [sendMessage] = useSendMessageMutation();

  const sendMessageFlow = async (messageText: string) => {
    const tempId = uuidv4();
    dispatch(
      addMessage({
        id: tempId,
        text: messageText,
        sender: "user",
        pending: true,
      })
    );

    dispatch(updateMessage({ id: tempId, text: messageText, pending: false }));

    const botTempId = uuidv4();
    dispatch(
      addMessage({ id: botTempId, text: "", sender: "bot", pending: true })
    );
    dispatch(setIsPending(true));

    try {
      const mutationPromise = sendMessage({
        question: messageText,
        sessionId,
      });
      dispatch(setAbortController(mutationPromise.abort));

      const response = await mutationPromise.unwrap();
      dispatch(
        updateMessage({ id: botTempId, text: response.answer, pending: false })
      );
    } catch (error) {
      type ChatError = { name: string; message: string };
      const e = error as ChatError;
      if (e.name === "AbortError") {
        dispatch(
          updateMessage({
            id: botTempId,
            text: "Mensaje cancelado",
            pending: false,
          })
        );
        return;
      }
      dispatch(
        updateMessage({
          id: botTempId,
          text: "Error al enviar",
          pending: false,
        })
      );
    } finally {
      dispatch(setIsPending(false));
    }
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

  const handleCancelMessage = () => {
    if (abortController) {
      abortController();
    }

    dispatch(cancelAnimation());
  };
  return {
    input,
    dispatch,
    handleSend,
    setInput,
    handleSendSuggestion,
    handleCancelMessage,
  };
};

export default useChat;
