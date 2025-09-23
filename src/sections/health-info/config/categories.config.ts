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
    icon: "Brain",
    color: "text-blue-500",
  },
  {
    label: "Ejercicio",
    value: "exercise",
    icon: "WeightIcon",
    color: "text-yellow-500",
  },
];
