import { ScrollArea } from "@/components/ui/scroll-area";
import HealthArticleCard from "./health-article-card";
import type { HealthInfo } from "../types/info";

interface HealthArticleGridProps {
  info: HealthInfo[];
}

const HealthArticleGrid = ({ info }: HealthArticleGridProps) => {
  return (
    <section className="mt-4 flex-1 min-h-0">
      <ScrollArea className="w-full h-full">
        <article className="grid grid-cols-2 gap-4  h-full">
          {info.map((c) => (
            <HealthArticleCard key={c.id} info={c} />
          ))}
        </article>
      </ScrollArea>
    </section>
  );
};

export default HealthArticleGrid;
