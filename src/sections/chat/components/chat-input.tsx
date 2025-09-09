import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

export const ChatInput = () => {
  return (
    <>
      <div className="flex items-center gap-5 p-5 rounded-b-lg bg-[#F8FAFC]">
        <Input
          placeholder={"Escribe tu consulta aqui..."}
          className="rounded  border-1 border-b-2 border-x-2 border-gray-400"
        />

        <Button className="bg-blue-500 text-white">
          <SendHorizonal />
        </Button>
      </div>
    </>
  );
};

export default ChatInput;
