import { CustomHeader } from "@/components/custom/custom-header";
import ChatInput from "../components/chat-input";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChatWindow } from "../components/chat-window";
import ChatSuggest from "../components/chat-suggest";
import useChatTour from "@/hooks/use-chat-tour";
import useChat from "../hooks/use-chat";


export const ChatMainView = () => {
  const isMobile = useIsMobile();

  const { handleSendSuggestion, isLoading } = useChat();

  useChatTour();
  return (
    <section className="flex flex-col h-full">
      {!isMobile && (
        <div id="chat-header" className="shrink-0">
          <CustomHeader title=" Asistente Vital-IA" />
        </div>
      )}

      <div id="chat-window" className="flex-1 p-0 overflow-hidden">
        <ChatWindow />
      </div>

      <div className={`shrink-0 `}>
        <ChatSuggest
          handleSendSuggestion={handleSendSuggestion}
          isLoading={isLoading}
        />
        <ChatInput />
      </div>
    </section>
  );
};
