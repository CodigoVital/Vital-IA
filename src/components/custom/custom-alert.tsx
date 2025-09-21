import * as Icons from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import LucideIcon from "../lucide-icon-name";

type LucideName = keyof typeof Icons;
interface CustomAlertProps {
  variant?: "default" | "destructive";
  title?: string;
  description?: string;
  iconName?: LucideName;
}

const CustomAlert = ({
  variant,
  title,
  description,
  iconName,
}: CustomAlertProps) => {
  return (
    <Alert variant={variant} className="mb-4">
      {iconName && <LucideIcon name={iconName} />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
