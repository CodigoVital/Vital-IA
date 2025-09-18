import { CustomHeader } from "@/components/custom/custom-header";
import ChatInput from "../components/chat-input";
import ChatSuggestView from "./chat-suggest-view";
import { ChatWindowView } from "./chat-window-view";
import { useIsMobile } from "@/hooks/use-mobile";

export const ChatMainView = () => {
  const isMobile = useIsMobile()
  return (
    <section className="flex flex-col h-full">
      {!isMobile && (
      <div className="shrink-0">
        <CustomHeader title="Vital-IA" />
      </div>
      )}

      <div className="flex-1 p-0 overflow-hidden">
      <ChatWindowView />
      </div>

      <div className="shrink-0">
      <ChatSuggestView />
      <ChatInput />
      </div>
    </section>
  );
};
