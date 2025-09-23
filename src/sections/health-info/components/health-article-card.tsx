import { Card } from "@/components/ui/card";

const HealthArticleCard = () => {
  return (
    <Card className="w-full h-full p-4 bg-white border border-custom-border rounded-md">
        <img src="" alt="" />
        <h1>`Título del Artículo`</h1>
        <p>`Resumen del artículo...`</p>
        <a href="">Leer más..</a>
    </Card>
  );
};

export default HealthArticleCard;
