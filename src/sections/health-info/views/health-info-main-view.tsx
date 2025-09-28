import { CustomHeader } from "@/components/custom/custom-header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import HealthCategoryFilter from "../components/health-category-filter";
import { categories } from "../config/categories.config";
import HealthArticleGrid from "../components/health-article-grid";
import useHealthInfo from "../hooks/use-health-info";
import { useIsMobile } from "@/hooks/use-mobile";

export const HealthInfoMainView = () => {
  const { filter, setFilter, setCategory, filteredInfo } = useHealthInfo();
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile && <CustomHeader title="Promoción de información de salud" />}

      <div
        className={cn(
          "w-full flex flex-col",
          "p-3 sm:p-5",
          isMobile ? "h-full" : "h-[calc(100vh-100px)]"
        )}
      >
        <Input
        id="health-info-search"
          className={cn(
            "rounded placeholder:text-custom-placeholder",
            "bg-white border border-custom-border",
            "text-sm sm:text-base"
          )}
          placeholder="Escribe tu búsqueda aquí"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <HealthCategoryFilter
          setCategory={setCategory}
          className={cn(
            "mt-3 sm:mt-4 bg-white flex flex-col border rounded-md border-custom-border",
            "h-auto"
          )}
          categories={categories}
        />
        <HealthArticleGrid info={filteredInfo} />
      </div>
    </>
  );
};

export default HealthInfoMainView;
