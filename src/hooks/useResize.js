import { useEffect } from "react";
export function useResize(handler) {
  useEffect(
    function () {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          handler(false);
        } else {
          handler(true);
        }
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    [handler],
  );
}
