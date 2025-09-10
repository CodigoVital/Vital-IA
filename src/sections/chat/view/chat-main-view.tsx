import { ChatHeader } from "../components/chat-header";
import ChatInput from "../components/chat-input";
import { ChatWindowView } from "./chat-window-view";

export const ChatMainView = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="shrink-0">
        <ChatHeader />
      </div>

      <ChatWindowView />

      <div className="shrink-0">
        <ChatInput />
      </div>
    </div>
  );
};
