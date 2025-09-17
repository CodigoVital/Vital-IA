import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

type LucideIconName = keyof typeof Icons;

interface IconProps {
  name: LucideIconName;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

export function LucideIcon({
  name,
  size,
  width,
  height,
  className,
  color,
}: IconProps) {
  const IconComponent = Icons[name];

  if (
    !IconComponent ||
    typeof IconComponent !== "function" ||
    IconComponent.length > 0
  ) {
    return null;
  }

  const LucideElement = IconComponent as React.ComponentType<
    React.ComponentProps<"svg">
  >;

  return (
    <LucideElement
      className={cn(className)}
      width={width ?? size}
      height={height ?? size}
      color={color}
    />
  );
}
