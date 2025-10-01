import { LucideIcon } from "@/components/lucide-icon-name";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/use-selector";
import {
  setInput,
  clearInput,
  addMessage,
  updateMessage,
} from "@/store/slices/chatbo-slice";
import { useSendMessageMutation } from "@/store/services/chat/chatApi";
import { v4 as uuidv4 } from "uuid";
import { useTransition } from "react";

export const ChatInput = () => {


  return (
    <div id="chat-input" className="flex items-center gap-5 p-5 rounded-b-lg">
      <Input
        placeholder="Escribe tu consulta aqui..."
        className="rounded border-1 bg-white border-[#CBD5E1]"
        value={input}
        onChange={(e) => dispatch(setInput(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <Button
        className="bg-[var(--customBackground)] text-white"
        onClick={handleSend}
        disabled={isPending}
      >
        <LucideIcon name="SendHorizontal" />
      </Button>
    </div>
  );
};

export default ChatInput;
