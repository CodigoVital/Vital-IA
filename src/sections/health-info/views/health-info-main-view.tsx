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

      <div className="p-5 w-full flex flex-col h-[calc(100vh-100px)]">
        <Input
          className={cn(
            "rounded placeholder:text-custom-placeholder",
            `bg-white border  border-custom-border `
          )}
          placeholder="Escribe tu búsqueda aquí"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <HealthCategoryFilter
          setCategory={setCategory}
          className="mt-4 bg-white flex flex-col h-19.5  border rounded-md border-custom-border"
          categories={categories}
        />
        <HealthArticleGrid info={filteredInfo} />
      </div>
    </>
  );
};

export default HealthInfoMainView;
