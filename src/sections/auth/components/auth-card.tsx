import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface AuthCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  title,
  description,
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className={cn('rounded-md',`bg-sidebar`)}>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-primary-custom-text mb-2">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-center text-primary-custom-text">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};
