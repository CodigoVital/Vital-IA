import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./use-selector";
import { setAnimating } from "@/store/slices/chatbot/text-animation-slice";

interface UseTextAnimationProps {
  message?: string;
  pending?: boolean;
  animate?: boolean;
  id?: string;
}

// Cache global para almacenar los mensajes animados
const animationCache: Record<string, string> = {};

const useTextAnimation = ({
  message,
  pending,
  animate = false,
  id,
}: UseTextAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const dispatch = useAppDispatch();
  const cancelAnimation = useAppSelector(
    (state) => state.textAnimation.cancelAnimation
  );
  const safeMessage = message ?? "";

  useEffect(() => {
    // si no hay una id, esta pendiente, no se debe animar o se canceló
    if (!id || pending || !animate || cancelAnimation) {
      setDisplayText(safeMessage);
      dispatch(setAnimating(false));
      return;
    }

    // Si ya está en cache
    if (animationCache[id]) {
      setDisplayText(animationCache[id]);
      return;
    }

    setDisplayText("");
    let charIndex = 0;
    let currentText = "";

    dispatch(setAnimating(true));

    const interval = setInterval(() => {
      currentText += safeMessage.charAt(charIndex);
      setDisplayText(currentText);

      charIndex++;
      if (charIndex >= safeMessage.length) {
        animationCache[id] = currentText;
        clearInterval(interval);
        dispatch(setAnimating(false));
      }
    }, 10);

    // limpiar intervalo al desmontar o reiniciar
    return () => clearInterval(interval);
  }, [safeMessage, pending, animate, id, cancelAnimation, dispatch]);

  return { displayText };
};

export default useTextAnimation;
