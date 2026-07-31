
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      const focusTarget = document.querySelector<HTMLElement>("main, h1");
      if (focusTarget) {
        focusTarget.tabIndex = -1;
        focusTarget.focus({ preventScroll: true });
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
