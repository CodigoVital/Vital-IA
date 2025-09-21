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
  return (
    <Dialog>
      <DialogTrigger aria-label={ariaLabel} className={className}>
        {title}
      </DialogTrigger>
      <DialogContent className="w-auto !max-w-fit p-5 sm:rounded-lg">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
