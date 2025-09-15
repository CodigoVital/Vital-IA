import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isOwnMessage?: boolean;
  userName?: string;
  timestamp?: string;
}

export default function ChatMessage({
  message,
  isOwnMessage = false,
  userName = "Usuario",
  timestamp,
}: ChatMessageProps) {
  const userInitial = userName.charAt(0).toUpperCase();
  return (
    <div
      className={cn(
        "flex gap-3 mb-4",
        isOwnMessage ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarFallback
          className={cn(
            isOwnMessage
              ? "bg-white text-[var(--customBackground)]"
              : "bg-[var(--customBackground)] text-white",
            "text-sm border-1 border-[#CBD5E1]"
          )}
        >
          {userInitial}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-[326px]  bg-[#F0F2F2] rounded-l px-4 py-3 text-sm leading-relaxed"
        )}
      >
        <p className="text-pretty">{message}</p>
        {timestamp && (
          <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
        )}
      </div>
    </div>
  );
}
