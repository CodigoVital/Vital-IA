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
        // allowClose: false,
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
            element: "#diagnosis-common-symptoms",
            popover: {
              title: "Sintomas comunes",
              description: "Selecciona un sintoma de la lista.",
            },
          },
          {
            element: "#add-custom-symptom",
            popover: {
              title: "Agrega sintomas",
              onNextClick: () => {
                const symptonBtn = document.querySelector(
                  "#add-custom-symptom"
                ) as HTMLButtonElement;
                symptonBtn?.click();
                setTimeout(() => {
                  driverObj.moveNext();
                }, 200);
              },
            },
          },
          {
            element: "#diagnosis-symptom-chips",
            popover: {
              title: "Sintomas seleccionados",
              description: "Revisa y elimina sintomas seleccionados.",
            },
          },
          {
            element: "#diagnosis-symptom-input",
            popover: {
              title: "Descripcion de sintomas",
              description: "Describe tus sintomas en detalle.",
            },
          },
          {
            element: "#diagnosis-submit-button",
            popover: {
              title: "Iniciar diagnostico",
              description:
                "Inicia el diagnostico con los sintomas seleccionados.",
              onNextClick: () => {
                const submitBtn = document.querySelector(
                  "#diagnosis-submit-button"
                ) as HTMLButtonElement;
                submitBtn?.click();
                setTimeout(() => {
                  driverObj.moveNext();
                }, 200);
              },
            },
          },
          {
            element: "#diagnosis-results",
            popover: {
              title: "Resultados",
              description: "Revisa los resultados del diagnóstico.",
              onNextClick: () => {
                setTimeout(() => {
                  driverObj.moveNext();
                }, 100);
                navigate("/health-info");
              },
            },
          },

          {
            element: "#health-info",
            popover: {
              title: "Informacion de salud",
              description: "busca y filtra información de salud.",
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
          {
            element:'#health-article-read',
            popover: {
              title: "Leer artículo",
              description: "Lee el artículo completo.",
            },
          }
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
