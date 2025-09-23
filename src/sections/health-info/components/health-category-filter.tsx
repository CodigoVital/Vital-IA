import LucideIcon, { type LucideName } from "@/components/lucide-icon-name";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Category {
  label: string;
  value: string;
  icon: LucideName;
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
    <ToggleGroup className={`flex gap-6`} type="single">
      {categories.map((c) => (
        <ToggleGroupItem className={className} key={c.value} value={c.value}>
          <LucideIcon name={c.icon} />
          <span>{c.label}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default HealthCategoryFilter;
