import { Card } from "@/components/ui/card";
import type { HealthInfo } from "../types/info";
import { Link } from "react-router";

interface HealthArticleCardProps {
  info: HealthInfo;
}

const HealthArticleCard = ({ info }: HealthArticleCardProps) => {
  return (
    <Card className="w-full z-10 h-full flex gap-0 p-0 flex-col bg-white border border-custom-border rounded-md">
      {info.img ? (
        <div className="relative w-full h-32 rounded-t-md overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={info.img}
            alt={info.title}
          />
          <div className="absolute inset-0 bg-black/30" />
          <h1
            className="absolute font-bold text-xl top-1/2 left-1/2 
                 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full"
          >
            {info.title}
          </h1>
        </div>
      ) : (
        <h1
          className={`w-full font-bold h-32 text-xl flex items-center justify-center rounded-t-md text-white ${
            ["bg-primary-custom", "bg-accent-custom", "bg-info"][
              Math.floor(Math.random() * 3)
            ]
          }`}
        >
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
          <Link
            to={`${info.id}`}
            className="text-primary-custom text-sm font-medium"
          >
            Leer más..
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default HealthArticleCard;
