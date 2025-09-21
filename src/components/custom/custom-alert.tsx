import * as Icons from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import LucideIcon from "../lucide-icon-name";
import { cn } from "@/lib/utils";

type LucideName = keyof typeof Icons;
interface CustomAlertProps {
  variant?: "default" | "destructive" | "warning";
  title?: string;
  description?: string;
  iconName?: LucideName;
  className?: string;
}

const CustomAlert = ({
  variant,
  title,
  description,
  iconName,
  className,
}: CustomAlertProps) => {
  return (
    <Alert variant={variant} className={cn(className)}>
      {iconName && <LucideIcon name={iconName} />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
