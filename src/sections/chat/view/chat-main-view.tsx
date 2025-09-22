import { CustomHeader } from "@/components/custom/custom-header";
import ChatInput from "../components/chat-input";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChatWindow } from "../components/chat-window";
import ChatSuggest from "../components/chat-suggest";

export const ChatMainView = () => {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col h-full">
      {!isMobile && (
        <div className="shrink-0">
          <CustomHeader title="Vital-IA" />
        </div>
      )}

      <div className="flex-1 p-0 overflow-hidden">
        <ChatWindow />
      </div>

      <div className="shrink-0">
        <ChatSuggest/>
        <ChatInput />
      </div>
    </section>
  );
};
