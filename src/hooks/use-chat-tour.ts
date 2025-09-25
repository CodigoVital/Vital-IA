import { useEffect, useMemo } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const TOUR_KEY = "vital-ia-chat-tour-shown";

const useChatTour = () => {
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
