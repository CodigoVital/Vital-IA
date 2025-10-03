import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./chat-message";
import Logo from "@/components/logo";
import { useAppSelector } from "@/hooks/use-selector";
import useAutoScroll from "@/hooks/use-auto-scroll";
import { useSidebar } from "@/components/ui/sidebar";

export const ChatWindow = () => {
  const messages = useAppSelector((state) => state.chatBot.messages);
  const { open } = useSidebar();
  const { containerRef, bottomRef } = useAutoScroll<HTMLDivElement>();
  return (
    <ScrollArea className="h-full px-4">
      <div
        ref={containerRef}
        className={`space-y-2 pt-4 ${open ? "" : "px-30"}`}
      >
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
            msgId={msg.id}
            isOwnMessage={msg.sender === "user"}
            userName={msg.sender === "user" ? "Tú" : "Vital-IA"}
            pending={msg.sender === "bot" && msg.pending}
          />
        ))}
        <div className="p-1" ref={bottomRef} />
      </div>
    </ScrollArea>
  );
};
