import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./chat-message";
import { sampleMessages } from "../view/data/message.mock";
import Logo from "@/components/logo";

export const ChatWindow = () => {
  return (
    <>
      <ScrollArea className="h-full px-4  ">
        <div className="space-y-2 pt-4 ">
          {!sampleMessages.length && (
            <div className="flex flex-col items-center justify-center w-full min-h-[60vh] text-center text-gray-500">
              <Logo
                className="w-68.5 h-57.5"
                bgColor="transparent"
                fillColor="#CBD5E1"
              />
            </div>
          )}
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
