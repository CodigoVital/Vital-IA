import LucideIcon from "@/components/lucide-icon-name";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToggleButtonProps {
  onShow: () => void;
  className?: string;
}

export const SuggestToggleButton = ({
  onShow,
  className,
}: ToggleButtonProps) => (
  <div className={`fixed bottom-20 right-4 z-50 ${className}`}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          onClick={onShow}
          className="rounded-lg text-gray-400 hover:text-gray-600 font-lato text-xs font-normal h-8 px-3 shadow-sm"
        >
          <LucideIcon name="MessageCircle" className="mr-2" size={14} />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">Mostrar sugerencias</TooltipContent>
    </Tooltip>
  </div>
);
export default SuggestToggleButton;
