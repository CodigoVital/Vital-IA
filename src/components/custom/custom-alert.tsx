import * as Icons from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import LucideIcon from "../lucide-icon-name";
import { cn } from "@/lib/utils";

type LucideName = keyof typeof Icons;
interface CustomAlertProps {
  variant?: "default" | "destructive";
  title?: string;
  description?: string;
  iconName?: LucideName;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const CustomAlert = ({
  variant,
  title,
  description,
  iconName,
  className,
  titleClassName,
  descriptionClassName,
}: CustomAlertProps) => {
  return (
    <Alert variant={variant} className={cn(className)}>
      {iconName && <LucideIcon name={iconName} />}
      <AlertTitle className={cn(titleClassName)}>{title}</AlertTitle>
      <AlertDescription className={cn(descriptionClassName)}>
        {description}
      </AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
