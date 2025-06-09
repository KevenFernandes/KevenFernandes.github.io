"use client";

import { useEffect } from "react";

export function useSmothScroll() {
  useEffect(() => {
    const handleSmothScroll = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;

      if (
        target.tagName === "A" ||
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();

        const targetId = target.getAttribute("href");

        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleSmothScroll);

    return () => {
      document.removeEventListener("click", handleSmothScroll);
    };
  }, []);
}
