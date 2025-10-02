import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import useTextAnimation from "@/hooks/use-text-animation";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  message: string | undefined;
  isOwnMessage?: boolean;
  userName?: string;
  timestamp?: string;
  pending?: boolean;
  msgId: string;
}

const ChatMessage = ({
  message,
  isOwnMessage = false,
  userName = "Usuario",
  timestamp,
  pending = false,
  msgId,
}: ChatMessageProps) => {
  const userInitial = userName.charAt(0).toUpperCase();
  const isMobile = useIsMobile();
  const { displayText } = useTextAnimation({
    message,
    pending,
    animate: !isOwnMessage,
    id: msgId,
  });
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
          "bg-[#F0F2F2] rounded px-4 py-3 text-sm leading-relaxed",
          isMobile ? "max-w-[326px]" : "max-w-[calc(100%-35rem)]",
          "sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]"
        )}
      >
        <p className="text-primary-custom-text font-lato f">
          {pending ? (
            "Vital-IA está pensando..."
          ) : (
            <ReactMarkdown>{displayText}</ReactMarkdown>
          )}
        </p>
        {timestamp && !pending && (
          <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
