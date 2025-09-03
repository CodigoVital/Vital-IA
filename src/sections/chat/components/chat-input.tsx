import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

export const ChatInput = () => {
  return (
    <>
      <div className="flex items-center gap-5 p-5 rounded-b-lg bg-[#F8FAFC]">
        <Input
          placeholder={"Escribe tu consulta aqui..."}
          className="rounded shadow-none border border-black"
        />

        <Button className="bg-blue-500 text-white">
          <SendHorizonal />
        </Button>
      </div>
    </>
  );
};

export default ChatInput;
