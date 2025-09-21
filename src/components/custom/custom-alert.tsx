import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface CustomAlertProps {
  variant?: "default" | "destructive";
  title?: string;
  description?: string;
}

const CustomAlert = ({ variant, title, description }: CustomAlertProps) => {
  return (
    <Alert variant={variant} className="mb-4">
      <Terminal />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
