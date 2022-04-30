import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="w-full h-14 fixed top-0 lef-0 right-0 bg-transparent z-10">
      <div className="app-container flex justify-between items-center">
        <Link to="/" className="logo">
          FLix
        </Link>
        <ul className="flex items-center">
          <li className="header-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-item">
            <Link to="/discovery">Discovery</Link>
          </li>
          <li className="header-item">
            <Link to="/explore">Explore</Link>
          </li>
          <li className="header-item">
            <Link to="/recent">Recent</Link>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none py-2 px-3 rounded-sm text-black"
        />
        <button className="px-4 py-2 rounded-sm bg-yellow shadow-lg shadow-[rgba(0,0,0,0.5)]">
          Sign in
        </button>
      </div>
    </header>
  );
};

{
  /* <div className="sidebar w-200 fixed top-0 left-0 bottom-0 bg-sidebar  py-8 ">
      <div className="flex flex-col justify-between h-full overflow-y-auto">
        <ul className="w-full h-full">
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <i className="bx bx-home sidebar-icon"></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/discovery" className="sidebar-link">
              <i className="bx bx-world sidebar-icon"></i>
              <span>Discovery</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/explore" className="sidebar-link">
              <i className="bx bx-tv sidebar-icon"></i>
              <span>Explore</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/recent" className="sidebar-link">
              <i className="bx bx-history sidebar-icon"></i>
              <span>Recent</span>
            </Link>
          </li>
        </ul>
        <button className="bg-sidebar-hover flex items-center justify-center px-2 py-2 mx-6 shadow">
          <i className="bx bx-log-in text-xl mr-2"></i>
          Sign in
        </button>
      </div>
    </div> */
}
