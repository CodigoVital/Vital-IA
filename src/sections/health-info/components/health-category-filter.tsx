import LucideIcon, { type LucideName } from "@/components/lucide-icon-name"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"



interface Category {
  label: string
  value: string
  icon: LucideName
}

interface HealthCategoryFilterProps {
  categories: Category[]
  className?: string
}

const HealthCategoryFilter = ({ categories, className }: HealthCategoryFilterProps) => {
  return (
    <ToggleGroup className={`flex space-x-2 ${className}`} type="single">
      {categories.map((c) => (
        <ToggleGroupItem
          key={c.value}
          value={c.value}
          className="flex items-center space-x-2"
        >
          <LucideIcon name={c.icon} />
          <span>{c.label}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

export default HealthCategoryFilter
