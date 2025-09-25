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
