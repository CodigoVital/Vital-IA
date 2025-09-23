import { CustomHeader } from "@/components/custom/custom-header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import HealthCategoryFilter from "../components/health-category-filter";
import { categories } from "../config/categories.config";
import HealthArticleGrid from "../components/health-article-grid";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export const HealthInfoMainView = () => {
  return (
    <>
      <CustomHeader title="Promoción de información de salud" />
      <div className="p-5 w-full flex flex-col h-[calc(100vh-100px)]">
        <Input
          className={cn(
            "rounded placeholder:text-custom-placeholder",
            `bg-white border  border-custom-border `
          )}
          placeholder="Escribe tu búsqueda aquí"
        />
        <HealthCategoryFilter
          className="mt-4 bg-white flex flex-col h-19.5  border rounded-md border-custom-border"
          categories={categories}
        />
        <HealthArticleGrid cards={cards} />
      </div>
    </>
  );
};

export default HealthInfoMainView;
