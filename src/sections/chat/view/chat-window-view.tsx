import ChatMessage from "../components/chat-message";
import { sampleMessages } from "./data/message.mock";

export const ChatWindowView = () => {
  return (
    <div className=" overflow-auto flex flex-col bg-background">
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {sampleMessages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            isOwnMessage={msg.isOwnMessage}
            userName={msg.userName}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
    </div>
  );
};
