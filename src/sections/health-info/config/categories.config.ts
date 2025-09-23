import type { LucideName } from "@/components/lucide-icon-name";

type Category = {
  label: string;
  value: string;
  icon: LucideName;
  color?: string;
};

export const categories: Category[] = [
  {
    label: "Prevención",
    value: "prevention",
    icon: "Shield",
    color: "text-[#CF8A40]",
  },
  {
    label: "Alimentación",
    value: "nutrition",
    icon: "Building",
    color: "text-primary-custom-text",
  },
  {
    label: "Salud Mental",
    value: "mental-health",
    icon: "CircleCheck",
    color: "text-primary-custom",
  },
  {
    label: "Ejercicio",
    value: "exercise",
    icon: "CircleAlert",
    color: "text-primary-custom",
  },
];
