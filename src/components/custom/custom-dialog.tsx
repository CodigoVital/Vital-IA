import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent } from "../ui/dialog";
import { type LucideName } from "../lucide-icon-name";

interface CustomPopupProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  iconName?: LucideName;
  open: boolean;
  onClose: (open: boolean) => void;
}
const CustomDialog = ({ children, open, onClose }: CustomPopupProps) => {
  const isMobile = useIsMobile();
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`p-6 sm:rounded-lg bg-sidebar ${
          isMobile ? "w-full !max-w-full rounded-none" : "w-auto !max-w-fit"
        }`}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
