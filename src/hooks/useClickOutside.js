import { useRef, useEffect, useState } from "react";

export function useClickOutside(handler) {
  const sidebarRef = useRef();
  useEffect(
    function () {
      const handleClickOutside = (event) => {
        // .current am i created?
        // children of sidebar?
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target) &&
          window.innerWidth < 640
        ) {
          handler(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [handler],
  );

  return sidebarRef;
}
