import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./chat-message";
import Logo from "@/components/logo";
import { useAppSelector } from "@/hooks/use-selector";

export const ChatWindow = () => {
  const messages = useAppSelector((state) => state.chatBot.messages);

  return (
    <ScrollArea className="h-full px-4">
      <div className="space-y-2 pt-4">
        {!messages.length && (
          <div className="flex flex-col items-center justify-center w-full min-h-[60vh] text-center text-gray-500">
            <Logo
              className="w-68.5 h-57.5"
              bgColor="transparent"
              fillColor="#CBD5E1"
            />
          </div>
        )}
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.text}
            isOwnMessage={msg.sender === "user"}
            userName={msg.sender === "user" ? "Tú" : "Vital-IA"}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
