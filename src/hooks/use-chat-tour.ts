import { useEffect, useMemo } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useNavigate } from "react-router";

const TOUR_KEY = "vital-ia-chat-tour-shown";

const useChatTour = () => {
  const navigate = useNavigate();
  const driverObj = useMemo(
    () =>
      driver({
        nextBtnText: "Siguiente",
        prevBtnText: "Anterior",
        animate: true,
        overlayColor: "rgba(0,0,0,0.6)",
        stagePadding: 8,
        popoverClass: "driverjs-theme",
        steps: [
          {
            popover: {
              title: "Bienvenido a Vital-IA",
              description: "Vital-IA tu asistente de salud",
              side: "top",
            },
          },
          {
            element: "#chatbot",
            popover: {
              title: "Chatbot",
              description: "Resuelve tus dudas usando lenguaje natural",
              side: "top",
            },
          },
          {
            element: "#chat-window",
            popover: {
              title: "Mensajes",
              description: "El bot repondera tus mensajes de forma clara.",
              side: "top",
            },
          },
          {
            element: "#chat-suggest",
            popover: {
              title: "Sugerencias",
              description:
                "Selecciona preguntas de forma rapida con nuestras sugerencias",
              side: "top",
            },
          },

          //diagnositoco
          {
            element: "#diagnosis",
            popover: {
              title: "Preclasificacion ",
              description:
                "Obten informacion de forma rapida con solo describir tus sintomas",
              onNextClick: () => {
                navigate("/diagnostico");
                setTimeout(() => {
                  driverObj.moveNext();
                }, 100);
              },
            },
          },

          {
            element: "#health-info",
            popover: {
              title: "Informacion de salud",
              description: "informacion de esta seccion.",
              onNextClick: () => {
                navigate("/health-info");
                setTimeout(() => {
                  driverObj.moveNext();
                }, 100);
              },
            },
          },
          {
            element: "#health-info-search",
            popover: {
              title: "Buscar información de salud",
              description: "Obten informacion actualizada sobre salud.",
            },
          },
          {
            element: "#health-category",
            popover: {
              title: "Categorías de salud",
              description: "Filtra por categorias.",
            },
          },

          {
            element: "#health-article-card",
            popover: {
              title: "Artículos de salud",
              description: "Obtene un resumen rapido del articulo",
            },
          },
        ],
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const hasShownTour = localStorage.getItem(TOUR_KEY);
    if (hasShownTour) {
      driverObj.drive();
      localStorage.setItem(TOUR_KEY, "true");
    }
  }, [driverObj]);
};

export default useChatTour;
