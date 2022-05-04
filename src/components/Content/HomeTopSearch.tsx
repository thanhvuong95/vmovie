import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getTopSearch } from "../../services";
import { TopSearchResponse } from "../../shared/type";
import { SkeletonTopSearch } from "../Skeleton/SkeletonTopSearch";

export const HomeTopSearch = () => {
  const { isLoading, error, data } = useQuery<TopSearchResponse, Error>(
    "topSearch",
    getTopSearch
  );

  if (isLoading) {
    return <SkeletonTopSearch />;
  }

  if (error) {
    return null;
  }

  return (
    <div className="w-full max-w-[300px] h-[500px] hidden lg:block mt-12 p-5 rounded-md shadow-md bg-[#2a2f3a] overflow-y-auto">
      <h3 className="uppercase font-[600] text-center mb-3 text-yellow">
        Top search
      </h3>
      <ul>
        {data?.list.map((item, i) => (
          <li key={item.id}>
            <Link
              to={`${
                item.domainType === 0 ? `/movie/${item.id}` : `/tv/${item.id}`
              }`}
              className="flex py-2 cursor-pointer hover:opacity-70 transition-all duration-200 ease-in"
            >
              <span
                className={`mr-4 flex items-center ${
                  i === 0 && "text-blue-500"
                } ${i === 1 && "text-green-500"}
              ${i === 2 && "text-orange-500"}`}
              >
                {i + 1}
              </span>
              <LazyLoadImage
                alt={item.title}
                src={item.cover}
                effect="black-and-white"
                wrapperClassName="w-[40%] mr-2"
                className="w-full h-[60px] rounded-md "
              />
              <span className="flex-1">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
