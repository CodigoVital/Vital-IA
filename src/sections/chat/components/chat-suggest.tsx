import { Button } from "@/components/ui/button";
import { suggestions } from "../view/data/suggest.mock";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/hooks/use-selector";
import { useSidebar } from "@/components/ui/sidebar";
import LucideIcon from "@/components/lucide-icon-name";

interface ChatSuggestProps {
  handleSendSuggestion: (suggestion: string) => void;
}

const ChatSuggest = ({ handleSendSuggestion }: ChatSuggestProps) => {
  const isAnimating = useAppSelector(
    (state) => state.textAnimation.isAnimating
  );
  const isPending = useAppSelector((state) => state.chatBot.isPending);
  const { open } = useSidebar();
  return (
    <section
      id="chat-suggest"
      className={`text-black p-4 border-y-1 border-[#CBD5E1] flex flex-col gap-4 ${
        open ? "" : " px-30 "
      }`}
    >
      <div className="flex items-center gap-2 justify-between">
        <h2 className="text-sm font-lato text-primary-custom-text">
          O prueba una de estas opciones:
        </h2>
        <LucideIcon
          name="X"
          className="
        text-primary-custom-text hover:cursor-pointer hover:text-black"
          size={14}
        />
      </div>

      <div className={`overflow-hidden max-w-full `}>
        <ScrollArea
          className={`w-full ${open ? "" : "border-x-1 border-custom-border"}`}
        >
          <div className="flex gap-2 px-1 pb-2">
            {suggestions.map((suggestion, index) => (
              <Button
                disabled={isAnimating || isPending}
                onClick={() => handleSendSuggestion(suggestion)}
                key={index}
                className="rounded-xl border-y-1 text-primary-custom-text font-lato bg-white border-[#CBD5E1] hover:cursor-pointer text-sm font-normal flex-shrink-0 whitespace-nowrap "
                variant="outline"
              >
                {suggestion}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default ChatSuggest;
