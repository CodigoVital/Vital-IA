import LucideIcon, { type LucideName } from "@/components/lucide-icon-name";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export interface Category {
  label: string;
  value: string;
  icon: LucideName;
  color?: string;
}

interface HealthCategoryFilterProps {
  categories: Category[];
  className?: string;
}

const HealthCategoryFilter = ({
  categories,
  className,
}: HealthCategoryFilterProps) => {
  return (
    <ToggleGroup className="flex gap-2 w-full" type="single">
      {categories.map((c) => (
        <ToggleGroupItem
          key={c.value}
          value={c.value}
          className={`rounded-lg flex items-center space-x-2 px-4 py-2 ${className}`}
        >
          <LucideIcon className={`${c.color} !w-7 !h-7 font-light`} name={c.icon} />
          <span>{c.label}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default HealthCategoryFilter;
