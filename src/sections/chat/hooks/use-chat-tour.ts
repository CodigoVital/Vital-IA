import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const useChatTour = () => {
  const driverObj = driver({
    showProgress: true,
    animate: true,
    allowClose: false,
    overlayColor: "rgba(0,0,0,0.6)",
    stagePadding: 8,
    popoverClass:
      "bg-primary-custom text-white rounded-xl p-4 shadow-lg max-w-xs",
    steps: [
      {
        popover: {
          title: "Bienvenido a Vital-IA",
          description:
            "Aquí podrás conversar con el asistente y explorar sus funciones.",
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
