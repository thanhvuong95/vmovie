import React, { useEffect, useRef } from "react";

export const BackTop = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const handleShowArrow = () => {
    if (window.screenY > 500 || document.documentElement.scrollTop > 500) {
      topRef.current?.classList.add("!bottom-4", "!translate-y-0");
    } else {
      topRef.current?.classList.remove("!bottom-4", "!translate-y-0");
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowArrow);
    return () => window.removeEventListener("scroll", handleShowArrow);
  }, []);

  return (
    <div
      ref={topRef}
      className="group fixed bottom-0 right-4 bg-white rounded-sm cursor-pointer px-1 hover:bg-yellow transition-all duration-200 ease-in translate-y-full z-20"
      onClick={handleScrollTop}
    >
      <i className="bx bx-chevron-up text-yellow text-3xl group-hover:text-white"></i>
    </div>
  );
};
