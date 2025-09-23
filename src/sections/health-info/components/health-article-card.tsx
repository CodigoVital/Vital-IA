import { Card } from "@/components/ui/card";
import type { HealthInfo } from "../types/info";

interface HealthArticleCardProps {
  info: HealthInfo;
}

const HealthArticleCard = ({ info }: HealthArticleCardProps) => {
  return (
    <Card className="w-full h-full p-4 bg-white border border-custom-border rounded-md">
      <img className="w-full h-32 object-cover" src={info.img} alt={info.title} />
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <a href="">Leer más..</a>
    </Card>
  );
};

export default HealthArticleCard;
