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
    value: "Prevención",
    icon: "Shield",
    color: "text-[#CF8A40]",
  },
  {
    label: "Alimentación",
    value: "Alimentación",
    icon: "Apple",
    color: "text-primary-custom-text",
  },
  {
    label: "Salud Mental",
    value: "Salud Mental",
    icon: "HeartPulse",
    color: "text-primary-custom",
  },
  {
    label: "Ejercicio",
    value: "Ejercicio",
    icon: "Activity",
    color: "text-primary-custom",
  },
];
