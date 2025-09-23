import type { LucideName } from "@/components/lucide-icon-name";

type Category = {
  label: string;
  value: string;
  icon: LucideName;
};

export const categories: Category[] = [
  { label: "Prevención", value: "prevention", icon: "ShieldCheck" },
  { label: "Alimentación", value: "nutrition", icon: "Apple" },
  { label: "Salud Mental", value: "mental-health", icon: "Brain" },
  { label: "Ejercicio", value: "exercise", icon: "WeightIcon" },
];
