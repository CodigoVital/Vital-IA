import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface CustomPopupProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}
const CustomPopup = ({ title, children, className, ariaLabel }: CustomPopupProps) => {
  return (
    <Dialog>
      <DialogTrigger aria-label={ariaLabel} className={className}>{title}</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomPopup;
