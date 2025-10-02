import { LucideIcon } from "@/components/lucide-icon-name";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useChat from "../hooks/use-chat";
import { useAppSelector } from "@/hooks/use-selector";

export const ChatInput = () => {
  const { input, handleSend, setInput, dispatch } = useChat();
  const isAnimating = useAppSelector((state) => state.chatBot.isAnimating);

  return (
    <div id="chat-input" className="flex items-center gap-5 p-5 rounded-b-lg">
      <Input
        placeholder="Escribe tu consulta aqui..."
        className="rounded border-1 bg-white border-[#CBD5E1]"
        value={input}
        disabled={isAnimating}
        onChange={(e) => dispatch(setInput(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <Button
        className="bg-[var(--customBackground)] text-white"
        onClick={handleSend}
        disabled={isAnimating || !input.trim()}
      >
        <LucideIcon name="SendHorizontal" />
      </Button>
    </div>
  );
};

export default ChatInput;
