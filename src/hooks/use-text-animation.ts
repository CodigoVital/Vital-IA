import { useEffect, useState } from "react";
import { useAppDispatch } from "./use-selector";
import { handleChangeAnimatingStatus } from "@/store/slices/chatbo-slice";

interface UseTextAnimationProps {
  message?: string | undefined;
  pending?: boolean | undefined;
  animate?: boolean;
  id?: string;
}

// Cache global para almacenar los mensajes animados
//esta afuera del hook para que no se pierda la refencia entre renders
const animationCache: Record<string, string> = {};

const useTextAnimation = ({
  message,
  pending,
  animate = false,
  id,
}: UseTextAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const dispatch = useAppDispatch();
  const safeMessage = message ?? "";

  useEffect(() => {
    if (!id || pending || !animate) {
      setDisplayText(safeMessage);
      return;
    }

    // Si ya está en la cache global, usamos ese texto
    if (animationCache[id]) {
      setDisplayText(animationCache[id]);
      return;
    }

    setDisplayText("");
    let charIndex = 0;
    let currentText = "";

    const interval = setInterval(() => {
      currentText += safeMessage.charAt(charIndex);
      setDisplayText(currentText);
      dispatch(handleChangeAnimatingStatus(true));

      charIndex++;
      if (charIndex >= safeMessage.length) {
        animationCache[id] = currentText; // guardamos en cache
        clearInterval(interval);
        dispatch(handleChangeAnimatingStatus(false));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [safeMessage, pending, animate, id, dispatch]);

  return { displayText };
};

export default useTextAnimation;
