import LucideIcon from "@/components/lucide-icon-name";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Category } from "../types/category";

interface HealthCategoryFilterProps {
  categories: Category[];
  className?: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const HealthCategoryFilter = ({
  categories,
  className,
  setCategory,
}: HealthCategoryFilterProps) => {
  return (
    <ToggleGroup className="flex gap-2 w-full" type="single">
      {categories.map((c) => (
        <ToggleGroupItem
          key={c.value}
          value={c.value}
          onClick={() => setCategory(c.value)}
          className={`rounded-lg flex items-center space-x-2 px-4 py-2 ${className}`}
        >
          <LucideIcon
            className={`${c.color} !w-7 !h-7 font-light mb-1`}
            name={c.icon}
          />
          <span className="font-light">{c.label}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default HealthCategoryFilter;
