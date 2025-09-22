import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface CustomPopupProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}
const CustomDialog = ({
  title,
  children,
  className,
  ariaLabel,
}: CustomPopupProps) => {
  const isMobile = useIsMobile();
  return (
    <Dialog>
      <DialogTrigger aria-label={ariaLabel} className={className}>
        {title}
      </DialogTrigger>
      <DialogContent
        className={`p-6 sm:rounded-lg ${
          isMobile ? "w-full !max-w-full" : "w-auto !max-w-fit"
        }`}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
