interface InfoCardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  analysis?: string;
  urgencyLevel?: string;
  urgencyColor?: string;
  recommendations?: string[];
}

export const InfoCard = ({
  title,
  analysis,
  urgencyLevel,
  urgencyColor = "#CF8A40",
  recommendations = [],
  className,
}: InfoCardProps) => {
  return (
    <section
      className={`bg-white border border-[#CBD5E1] rounded-md p-4 mb-6 overflow-auto ${className}`}
    >
      {title && <div className="font-bold text-[#1A2E46] mb-2">{title}</div>}

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
    </section>
  );
};
