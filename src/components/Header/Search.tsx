import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.code === "Enter" && searchRef.current?.value.trim()) {
      navigate({
        pathname: "/search",
        search: `?q=${searchRef.current?.value.trim()}`,
      });
      searchRef.current.value = "";
    }
  };
  return (
    <div className="hidden sm:flex mx-2 flex-1 max-w-[400px] order-2 ">
      <div className=" relative w-full">
        <input
          type="text"
          className="block p-1.5 pl-5 w-full  text-black  bg-gray-50 rounded-lg outline-none shadow-sm"
          placeholder="Search..."
          ref={searchRef}
          onKeyUp={handleSearch}
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
