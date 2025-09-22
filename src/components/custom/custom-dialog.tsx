import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import LucideIcon, { type LucideName } from "../lucide-icon-name";

interface CustomPopupProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  iconName?: LucideName;
}
const CustomDialog = ({
  title,
  children,
  className,
  ariaLabel,
  iconName = 'Shield',
}: CustomPopupProps) => {
  const isMobile = useIsMobile();
  return (
    <Dialog>
      <DialogTrigger aria-label={ariaLabel} className={className}>
        <div className="flex items-center justify-center gap-2">
          {iconName && <LucideIcon name={iconName} />}
          {title}
        </div>
      </DialogTrigger>
      <DialogContent
        className={`p-6 sm:rounded-lg bg-sidebar ${
          isMobile ? "w-full !max-w-full" : "w-auto !max-w-fit"
        }`}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
