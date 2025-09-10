import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "../components/chat-message";
import { sampleMessages } from "./data/message.mock";

export const ChatWindowView = () => {
  return (
    <>

      <ScrollArea className="h-full px-4 bg-background">
        <div className="space-y-2 pt-4">
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
      </ScrollArea>
    </>
  );
};
