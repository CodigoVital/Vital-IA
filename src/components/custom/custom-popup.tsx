import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

interface CustomPopupProps {
  title: string;
  children: React.ReactNode;
}
const CustomPopup = ({title, children}: CustomPopupProps) => {
  return (
    <Popover>
  <PopoverTrigger>{title}</PopoverTrigger>
  <PopoverContent>{children}</PopoverContent>
</Popover>
  )
}

export default CustomPopup