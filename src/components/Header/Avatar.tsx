import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Avatar = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleCloseMenu = (e: Event) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest(".avatar") &&
      !menuRef.current?.classList.contains("hidden")
    ) {
      menuRef.current?.classList.add("hidden");
    }
    if (target.closest(".avatar")) {
      menuRef.current?.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseMenu);
    return () => window.removeEventListener("click", handleCloseMenu);
  }, []);

  return (
    <div className=" lg:order-last order-3 relative">
      <button
        type="button"
        className="avatar flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 hover:ring-2 hover:ring-white"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full object-cover ">
          V
        </span>
        {/* <img className="w-8 h-8 rounded-full" src="" alt="avatar" /> */}
      </button>

      {/* dropdown start */}
      <div
        ref={menuRef}
        className=" z-10 my-4 text-base bg-white rounded shadow absolute top-6 right-1 hidden "
      >
        <ul className="py-1" aria-labelledby="dropdown">
          <li>
            <Link to="/" className="nav-user">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-user">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-user">
              Favorite
            </Link>
          </li>
          <Link to="/" className="nav-user">
            Sign out
          </Link>
        </ul>
      </div>
      {/* dropdown end */}
    </div>
  );
};
