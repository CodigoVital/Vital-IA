import { ChatHeader } from "../components/chat-header";
import ChatInput from "../components/chat-input";
import { ChatWindowView } from "./chat-window-view";

export const ChatMainView = () => {
  return (
    <section className="flex flex-col h-full">
      <div className="shrink-0">
        <ChatHeader />
      </div>

      <div className="flex-1 p-0 overflow-hidden">
        <ChatWindowView />
      </div>

      <div className="shrink-0  ">
        <ChatInput />
      </div>
    </section>
  );
};
