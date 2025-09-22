import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  children?: React.ReactNode;
  className?: string;
  analysis?: string;
  urgencyLevel?: string;
  urgencyColor?: string;
  recommendations?: string[];
}

export const InfoCard = ({
  analysis,
  urgencyLevel,
  urgencyColor = "#CF8A40",
  recommendations = [],
  className,
}: InfoCardProps) => {
  return (
    <Card
      className={cn(
        "border-none shadow-none",
        `bg-white  h-full w-full  p-4 mb-6 overflow-auto ${className}`
      )}
    >
      {analysis && (
        <div className="mb-2">
          <span className="font-bold text-[#1A2E46]">Análisis General:</span>
          <span className="text-[#1A2E46] ml-2">{analysis}</span>
        </div>
      )}

      {urgencyLevel && (
        <div className="mb-2">
          <span className="font-bold text-[#1A2E46]">Nivel de urgencia:</span>
          <span className="ml-2" style={{ color: urgencyColor }}>
            {urgencyLevel}
          </span>
        </div>
      )}

      {recommendations.length > 0 && (
        <>
          <div className="font-bold text-[#1A2E46] mb-1">Recomendaciones:</div>
          <ul className="list-disc ml-6 text-[#1A2E46]">
            {recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
};
