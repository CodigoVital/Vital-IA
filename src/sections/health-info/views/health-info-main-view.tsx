import { CustomHeader } from "@/components/custom/custom-header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import HealthCategoryFilter from "../components/health-category-filter";
import { categories } from "../config/categories.config";

export const HealthInfoMainView = () => {
  return (
    <>
      <CustomHeader title="Promosión de información de salud" />
      <div className="p-5">
        <Input
          className={cn(
            "rounded placeholder:text-custom-placeholder",
            `bg-white border  border-custom-border `
          )}
          placeholder="Escribe tu búsqueda aquí"
        />
        <HealthCategoryFilter
          className="mt-4 bg-white border rounded-md border-custom-border"
          categories={categories}
        />
      </div>
    </>
  );
};

export default HealthInfoMainView;
