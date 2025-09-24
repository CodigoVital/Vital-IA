import { CustomHeader } from "@/components/custom/custom-header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import HealthCategoryFilter from "../components/health-category-filter";
import { categories } from "../config/categories.config";
import HealthArticleGrid from "../components/health-article-grid";
import { info } from "../data/health-info.mock";
import { useState } from "react";

export const HealthInfoMainView = () => {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const filteredInfo = info.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase()) &&
    (category ? item.category === category : true)
  );

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
