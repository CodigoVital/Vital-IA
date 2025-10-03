import { Button } from "@/components/ui/button";
import { suggestions } from "../view/data/suggest.mock";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/hooks/use-selector";
import { useSidebar } from "@/components/ui/sidebar";
import LucideIcon from "@/components/lucide-icon-name";
import { useState } from "react";
import SuggestToggleButton from "./suggest-toggle-button";
import { motion, AnimatePresence } from "framer-motion";

interface ChatSuggestProps {
  handleSendSuggestion: (suggestion: string) => void;
}

const ChatSuggest = ({ handleSendSuggestion }: ChatSuggestProps) => {
  const [hidden, setHidden] = useState(false);
  const isAnimating = useAppSelector((s) => s.textAnimation.isAnimating);
  const isPending = useAppSelector((s) => s.chatBot.isPending);
  const { open } = useSidebar();

  if (hidden) {
    return (
      <SuggestToggleButton
        onShow={() => setHidden(false)}
        className={`${open ? "" : " px-30 "}`}
      />
    );
  }

  return (
    <>
      <AnimatePresence>
        {!hidden && (
          <motion.section
            key="suggestions"
            id="chat-suggest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-black p-4 border-t-1 border-[#CBD5E1] flex flex-col gap-4 ${
              open ? "" : " px-30 "
            }`}
          >
            <div className="flex items-center gap-2 justify-between">
              <h2 className="text-sm font-lato text-primary-custom-text">
                O prueba una de estas opciones:
              </h2>
              <LucideIcon
                name="X"
                onClick={() => setHidden(true)}
                className="text-primary-custom-text hover:cursor-pointer hover:text-black"
                size={14}
              />
            </div>

            <div className="overflow-hidden max-w-full">
              <ScrollArea
                className={`w-full ${
                  open ? "" : "border-x-1 border-custom-border"
                }`}
              >
                <div className="flex gap-2 px-1 pb-2">
                  {suggestions.map((s, i) => (
                    <Button
                      disabled={isAnimating || isPending}
                      onClick={() => handleSendSuggestion(s)}
                      key={i}
                      className="rounded-xl border-y-1 text-primary-custom-text font-lato bg-white border-[#CBD5E1] hover:cursor-pointer text-sm font-normal flex-shrink-0 whitespace-nowrap"
                      variant="outline"
                    >
                      {s}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatSuggest;
