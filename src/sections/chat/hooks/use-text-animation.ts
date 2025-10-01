import { useEffect, useState } from "react";

interface UseTextAnimationProps {
  message: string | undefined;
  pending: boolean | undefined;
  animate?: boolean;
}

const useTextAnimation = ({
  message,
  pending,
  animate = false,
}: UseTextAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const safeMessage = message ?? "";

  useEffect(() => {
    if (pending || !animate) {
      setDisplayText(safeMessage);
      return;
    }

    setDisplayText("");
    const lines = safeMessage.split("\n"); 
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (lineIndex >= lines.length) {
        clearInterval(interval);
        return;
      }

      const line = lines[lineIndex];
      currentText += line.charAt(charIndex);
      setDisplayText(currentText);

      charIndex++;
      if (charIndex >= line.length) {
        currentText += "\n"; 
        charIndex = 0;
        lineIndex++;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [safeMessage, pending, animate]);

  return { displayText };
};

export default useTextAnimation;
