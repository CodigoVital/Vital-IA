import { useEffect, useRef } from "react";

export const useAutoScroll = <T extends HTMLElement>() => {
  const containerRef = useRef<T | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return { containerRef, bottomRef };
};

export default useAutoScroll;
