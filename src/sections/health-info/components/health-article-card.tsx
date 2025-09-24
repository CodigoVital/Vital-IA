import { Card } from "@/components/ui/card";
import type { HealthInfo } from "../types/info";

interface HealthArticleCardProps {
  info: HealthInfo;
}

const HealthArticleCard = ({ info }: HealthArticleCardProps) => {
  return (
    <Card className="w-full z-10 h-full flex gap-0 p-0 flex-col bg-white border border-custom-border rounded-md">
      {info.img ? (
        <div className="relative w-full h-32 rounded-t-md overflow-hidden">
          <img
            className="w-full  h-32 object-cover"
            src={info.img}
            alt={info.title}
          />
          <h1 className="absolute font-bold text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-2 py-1 rounded text-center w-full">
            {info.title}
          </h1>
        </div>
      ) : (
        <h1 className="w-full font-bold h-32 text-xl flex items-center justify-center bg-gray-200 text-gray-500 rounded-t-md">
          {info.title}
        </h1>
      )}

      <div className="flex flex-col justify-between flex-1 p-3">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-accent-custom">{info.category}</span>
          <h1 className="font-semibold text-primary-custom-text">
            {info.title}
          </h1>
          <p className="text-sm text-primary-custom-text line-clamp-3">
            {info.description}
          </p>
        </div>

        <div className="mt-2">
          <a href="#" className="text-primary-custom text-sm font-medium">
            Leer más..
          </a>
        </div>
      </div>
    </Card>
  );
};

export default HealthArticleCard;
