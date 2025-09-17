
import * as Icons from "lucide-react";
import React from "react";

type LucideName = keyof typeof Icons;

export interface LucideIconProps extends React.SVGProps<SVGSVGElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name?: LucideName;
  size?: number;
  className?: string;
}

export function LucideIcon({
  icon: IconProp,
  name,
  size = 20,
  className,
  ...rest
}: LucideIconProps) {
  const IconCandidate = IconProp ?? (name ? Icons[name as LucideName] : undefined);
  const isValidIcon =
    typeof IconCandidate === "function" ||
    (typeof IconCandidate === "object" && IconCandidate !== null && "render" in IconCandidate);

  if (!isValidIcon) return null;

  const Icon = IconCandidate as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  return <Icon width={size} height={size} className={className} {...rest} />;
}

export default LucideIcon;
