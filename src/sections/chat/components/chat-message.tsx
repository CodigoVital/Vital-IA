import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
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
          isMobile ? "max-w-[20.375rem]" : "max-w-[calc(100%-35rem)]",
          "sm:max-w-[31.25rem] md:max-w-[43.75rem] lg:max-w-[56.25rem] xl:max-w-[56.25rem]"
        )}
      >
        <p className="text-primary-custom-text font-lato">
          {pending ? (
            <>
              <Skeleton className="w-[150px] h-5 rounded-xl bg-transparent">
                <span className="text-primary-custom-text font-lato">
                  Vital-IA está pensando...
                </span>
              </Skeleton>
            </>
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
