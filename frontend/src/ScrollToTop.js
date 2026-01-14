import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This triggers the browser's built-in smooth scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // The key property for the gliding effect
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;