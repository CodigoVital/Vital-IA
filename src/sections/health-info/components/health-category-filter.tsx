import LucideIcon from "@/components/lucide-icon-name";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Category } from "../types/category";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  return (
    <ToggleGroup className="flex gap-2 w-full" type="single">
      {categories.map((c) => (
        <ToggleGroupItem
          key={c.value}
          value={c.value}
          onClick={() => setCategory(c.value)}
          className={`rounded-lg flex items-center space-x-2 px-4 py-2 ${isMobile ? "flex-col justify-center space-x-0 space-y-1" : ""} ${className}`}
        >
          <LucideIcon
            className={`${c.color} !w-7 !h-7 font-light mb-1 ${isMobile ? "!w-5 !h-5 mb-0" : ""}`}
            name={c.icon}
          />
          <span className={`font-light ${isMobile ? "text-xs" : "text-sm"}`}>
            {c.label}
          </span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default HealthCategoryFilter;
