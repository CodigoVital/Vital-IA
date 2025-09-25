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
        animate: true,
        overlayColor: "rgba(0,0,0,0.6)",
        stagePadding: 8,
        popoverClass: "driverjs-theme",
        steps: [
          {
            popover: {
              title: "Bienvenido a Vital-IA",
              description:
                "algun mensaje de bienvenida o introducción al tour.",
              side: "top",
            },
          },
          {
            element: "#chatbot",
            popover: {
              title: "Chatbot",
              description: "informacion de esta seccion.",
              side: "top",
            },
          },
          {
            element: "#chat-window",
            popover: {
              title: "Mensajes",
              description: "algo aqui.",
              side: "top",
            },
          },
          {
            element: "#chat-suggest",
            popover: {
              title: "Sugerencias",
              description: "algo aqui.",
              side: "top",
            },
          },
          {
            element: "#chat-input",
            popover: {
              title: "Escribir",
              description: "algo aqui.",
              side: "top",
            },
          },

          //diagnositoco
          {
            element: "#diagnosis",
            popover: {
              title: "Diagnostico",
              description: "informacion de esta seccion.",
              onNextClick: () => {
                navigate("/diagnostico");
                setTimeout(() => {
                  driverObj.moveNext();
                }, 100);
              },
            },
          },
          {
            element: "#common-symptom",
            popover: {
              title: "Sintomas comunes",
              description: "algo aqui.",
            },
          },
          {
            element: "#description-symptom",
            popover: {
              title: "Descripcion del sintoma",
              description: "algo aqui.",
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
              description: "informacion de esta seccion.",
            },
          },
          {
            element: "#health-category",
            popover: {
              title: "Categorías de salud",
              description: "informacion de esta seccion.",
            },
          },
          {
            element: "#health-article-grid",
            popover: {
              title: "Artículos de salud",
              description: "informacion de esta seccion.",
            },
          },
        ],
      }),
    []
  );

  useEffect(() => {
    const hasShownTour = localStorage.getItem(TOUR_KEY);
    if (!hasShownTour) {
      driverObj.drive();
      localStorage.setItem(TOUR_KEY, "true");
    }
  }, [driverObj]);
};

export default useChatTour;
