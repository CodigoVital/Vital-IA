import { useEffect, useState } from "react";

interface UseTextAnimationProps {
  message: string | undefined;
  pending: boolean | undefined;
  animate?: boolean;
}

const useTextAnimation = ({ message, pending, animate = false }: UseTextAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const safeMessage = message ?? "";

  useEffect(() => {
    if (pending || !animate) {
      setDisplayText(safeMessage);
      return;
    }

    setDisplayText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < safeMessage.length) {
        setDisplayText(safeMessage.substring(0, i + 1)); 
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [safeMessage, pending, animate]);

  return { displayText };
};

export default useTextAnimation;
