import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface CustomPopupProps {
  title: string;
  children: React.ReactNode;
}
const CustomPopup = ({ title, children }: CustomPopupProps) => {
  return (
    <Dialog>
      <DialogTrigger>{title}</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomPopup;
