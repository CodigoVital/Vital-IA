import type { LucideName } from "@/components/lucide-icon-name";

export interface Category {
  label: string;
  value: string;
  icon: LucideName;
  color?: string;
}
