import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../shared/firebase";
import store from "../../store/store";

export const Avatar = () => {
  const { user, setUser } = store();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

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
        {user?.photoURL ? (
          <img
            className="w-8 h-8 rounded-full"
            src={user.photoURL}
            alt="avatar"
          />
        ) : (
          <span className="flex items-center justify-center w-8 h-8 rounded-full object-cover ">
            V
          </span>
        )}
      </button>

      {/* dropdown start */}
      <div
        ref={menuRef}
        className=" z-10 my-4 text-base bg-white rounded shadow absolute top-6 right-1 hidden "
      >
        <ul className="py-1" aria-labelledby="dropdown">
          {user ? (
            <>
              <li>
                <span className="nav-user ">Dashboard</span>
              </li>
              <li>
                <span className="nav-user ">Settings</span>
              </li>
              <li>
                <span className="nav-user ">Favorite</span>
              </li>
              <li>
                <span className="nav-user  " onClick={handleLogout}>
                  Sign out
                </span>
              </li>
            </>
          ) : (
            <li>
              <span className="nav-user" onClick={() => navigate("/auth")}>
                Sign in
              </span>
            </li>
          )}
        </ul>
      </div>
      {/* dropdown end */}
    </div>
  );
};
