// useWindowSize.js
import { useState, useEffect } from "react";

export function useWindowSize() {
  // Check if window is available (for SSR compatibility)
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
}

export function useBreakpoints() {
  const { width } = useWindowSize();
  return {
    isSM: width !== undefined && width < 640, // below 640px: small (mobile)
    isMD: width !== undefined && width >= 640 && width < 1024, // 640px-1023px: medium (tablet)
    isLG: width !== undefined && width >= 1024, // 1024px and up: large (desktop)
  };
}
