import { CustomHeader } from "@/components/custom/custom-header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import HealthCategoryFilter from "../components/health-category-filter";
import { categories } from "../config/categories.config";
import { ScrollArea } from "@/components/ui/scroll-area";
import HealthArticleCard from "../components/health-article-card";

export const HealthInfoMainView = () => {
  return (
    <>
      <CustomHeader title="Promosión de información de salud" />
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
        <section className="mt-4 flex-1 min-h-0">
          <ScrollArea className="w-full h-full">
            <article className="grid grid-cols-2 gap-4 p-2 h-full">
              <HealthArticleCard />
              <HealthArticleCard />
              <HealthArticleCard />
              <HealthArticleCard />
              <HealthArticleCard />
              <HealthArticleCard />
              <HealthArticleCard />
              <HealthArticleCard />
            </article>
          </ScrollArea>
        </section>
      </div>
    </>
  );
};

export default HealthInfoMainView;
