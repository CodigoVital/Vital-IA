import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const useChatTour = () => {
  const driverObj = driver({
    showProgress: false,
    animate: true,
    allowClose: false,
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
  });
  driverObj.drive();
  useEffect(() => {
    driverObj.drive();
  }, [driverObj]);
};

export default useChatTour;
