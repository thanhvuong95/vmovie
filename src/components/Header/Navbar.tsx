import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { navLink } from "../../ultils/nav-link";
interface NavbarProp {
  isMenuActive: boolean;
  toggleMenu: () => void;
}
export const Navbar: FC<NavbarProp> = ({ isMenuActive, toggleMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="lg:order-1 order-last">
      {/* menu start */}
      <div
        className="hidden justify-between items-center w-full lg:flex md:w-auto "
        id="mobile-menu-2"
      >
        <ul className="flex gap-8 ">
          {navLink.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${isActive && "after:w-full"} nav-item`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* menu end */}
      {/* icon start*/}
      <div className="md:ml-4 cursor-pointer lg:hidden" onClick={toggleMenu}>
        <span
          className={` inline-block relative w-6 h-0.5 rounded-sm  bg-white shadow-sm shadow-black before:absolute before:block before:w-full before:h-full before:bg-white before:-top-2 before:left-0  before:rounded-sm before:shadow-sm before:shadow-black before:transition-all before:duration-200 before:ease-linear
          after:absolute after:block after:w-full after:h-full after:bg-white after:top-2 after:left-0 after:rounded-sm after:shadow-sm after:shadow-black after:transition-all after:duration-200 after:ease-linear
         `}
        ></span>
      </div>
      {/* icon end */}
      {/* menu mobile */}
      <div
        className={`w-full max-w-[320px] fixed top-0 left-0 bottom-0 bg-sidebar  bg-backgroundDark shadow-sm shadow-[#000] -translate-x-full transition-transform duration-300 ease-in
        z-20
         ${isMenuActive && "translate-x-0"}`}
      >
        <div className=" h-full overflow-y-auto relative">
          <ul className="w-full h-full py-10 cursor-pointer">
            {navLink.map((item, i) => (
              <li className="nav-item-mobile" key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${isActive && "text-yellow"} sidebar-link`
                  }
                  onClick={toggleMenu}
                >
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="text-2xl text-white absolute top-2 right-4"
            onClick={toggleMenu}
          >
            &#x2715;
          </button>
        </div>
      </div>
      {/* menu mobile end */}
    </div>
  );
};
