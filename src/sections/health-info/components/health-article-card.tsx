import { Card } from "@/components/ui/card";
import type { HealthInfo } from "../types/info";

interface HealthArticleCardProps {
  info: HealthInfo;
}

const HealthArticleCard = ({ info }: HealthArticleCardProps) => {
  return (
    <Card className="w-full h-full flex gap-0 p-0 flex-col bg-white border border-custom-border rounded-md">
      {info.img ? (
        <img
          className="w-full h-32 rounded-none object-cover"
          src={info.img}
          alt={info.title}
        />
      ) : (
        <div className="w-full h-32 flex items-center justify-center bg-gray-200 text-gray-500">
          Sin imagen disponible
        </div>
      )}

      <div className="flex flex-col justify-between flex-1 p-2">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">{info.category}</span>
          <h1 className="font-semibold">{info.title}</h1>
          <p className="text-sm text-gray-700 line-clamp-3">
            {info.description}
          </p>
        </div>

        <div className="mt-2">
          <a href="#" className="text-blue-600 text-sm font-medium">
            Leer más..
          </a>
        </div>
      </div>
    </Card>
  );
};

export default HealthArticleCard;
