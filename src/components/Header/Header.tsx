import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Navbar } from "./Navbar";
import { Search } from "./Search";
export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const headerRef = useRef<HTMLElement>(null);
  const handleShowArrow = () => {
    if (window.screenY > 60 || document.documentElement.scrollTop > 60) {
      headerRef.current?.classList.add("!bg-black");
    } else {
      headerRef.current?.classList.remove("!bg-black");
    }
  };

  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  useEffect(() => {
    window.addEventListener("scroll", handleShowArrow);
    return () => window.removeEventListener("scroll", handleShowArrow);
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full  fixed top-0 lef-0 right-0 bg-transparent z-10 transition-all duration-200 ease-in"
    >
      <div className="app-container  flex flex-nowrap justify-between items-center mx-auto px-2 sm:px-4 py-2.5">
        <Link to="/" className="flex items-center">
          <i className="bx bx-movie-play block mr-2 text-3xl text-yellow animate-tada"></i>
          <span className="self-center text-xl font-secondary font-semibold whitespace-nowrap hidden sm:block">
            VMovie
          </span>
        </Link>
        <div className="flex items-stretch sm:justify-evenly flex-1 justify-end">
          <Navbar isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
          <Search />
          <Avatar />
        </div>
      </div>
      <div
        className={` fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)] ${
          isMenuActive ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};
