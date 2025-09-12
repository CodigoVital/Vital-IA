import { Button } from "@/components/ui/button";
import { suggestions } from "./data/suggest.mock";


const ChatSuggestView = () => {
  return (
    <>
      <section className=" text-black p-4 border-y-1 border-[#CBD5E1] flex flex-col  gap-4">
        <h2 className="text-sm">O prueba una de estas opciones:</h2>
        <div className="flex flex-row gap-2 flex-wrap mx-3">
          {suggestions.map((suggestion, index) => (
            <Button key={index} className="rounded-xl border-y-1 border-[#CBD5E1] text-sm font-normal" variant="outline">
              {suggestion}
            </Button>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChatSuggestView;
