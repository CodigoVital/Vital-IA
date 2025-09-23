import { ScrollArea } from "@/components/ui/scroll-area";
import HealthArticleCard from "./health-article-card";

interface HealthArticleGridProps {
  cards: number[];
}

const HealthArticleGrid = ({ cards }: HealthArticleGridProps) => {
  return (
    <section className="mt-4 flex-1 min-h-0">
      <ScrollArea className="w-full h-full">
        <article className="grid grid-cols-2 gap-4  h-full">
          {cards.map((c) => (
            <HealthArticleCard key={c} />
          ))}
        </article>
      </ScrollArea>
    </section>
  );
};

export default HealthArticleGrid;
