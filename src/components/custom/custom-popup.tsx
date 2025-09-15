import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const CustomPopup = () => {
  return (
    <Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
  )
}

export default CustomPopup