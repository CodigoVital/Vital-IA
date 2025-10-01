import { Button } from "@/components/ui/button";
import { suggestions } from "../view/data/suggest.mock";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ChatSuggest = () => {
  return (
    <section
      id="chat-suggest"
      className="text-black p-4 border-y-1 border-[#CBD5E1] flex flex-col gap-4"
    >
      <h2 className="text-sm font-lato text-primary-custom-text">
        O prueba una de estas opciones:
      </h2>
      <div className="overflow-hidden max-w-full">
        <ScrollArea className="w-full">
          <div className="flex gap-2 px-1 pb-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                className="rounded-xl border-y-1 text-primary-custom-text font-lato bg-white border-[#CBD5E1] text-sm font-normal flex-shrink-0 whitespace-nowrap "
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
