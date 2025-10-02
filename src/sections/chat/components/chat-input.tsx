import { LucideIcon } from "@/components/lucide-icon-name";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useChat from "../hooks/use-chat";
import { useAppSelector } from "@/hooks/use-selector";
import { useSidebar } from "@/components/ui/sidebar";

export const ChatInput = () => {
  const { input, handleSend, setInput, dispatch, isLoading } = useChat();
  const isAnimating = useAppSelector((state) => state.chatBot.isAnimating);
  const { open } = useSidebar();

  return (
    <div
      id="chat-input"
      className={`flex items-center gap-5 p-5 rounded-b-lg  ${
        open ? "" : " px-35 "
      }`}
    >
      <Input
        placeholder="Escribe tu consulta aqui..."
        className="rounded border-1 bg-white border-[#CBD5E1]"
        value={input}
        disabled={isAnimating || isLoading}
        onChange={(e) => dispatch(setInput(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      {isLoading || isAnimating ? (
        //TODOL: implementar metodo para cancelar la peticion
        <Button className="bg-accent-custom text-white">
          <LucideIcon name="X" />
        </Button>
      ) : (
        <Button
          className="bg-[var(--customBackground)] text-white"
          onClick={handleSend}
          disabled={!input.trim()}
        >
          <LucideIcon name="SendHorizontal" />
        </Button>
      )}
    </div>
  );
};

export default ChatInput;
