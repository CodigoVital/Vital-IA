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
    icon: "ShieldCheck",
    color: "text-green-500",
  },
  {
    label: "Alimentación",
    value: "nutrition",
    icon: "Apple",
    color: "text-red-500",
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
