import React from "react";
import { Skeleton } from "./Skeleton";

export const SkeletonTopSearch = () => {
  return (
    <div className="w-full max-w-[300px] mt-12 hidden lg:block">
      <Skeleton className="w-[150px] h-6 rounded-md mb-6" />
      <ul className="mt-6">
        {[...new Array(4)].map((_, index) => (
          <li className="flex items-center py-2" key={index}>
            <Skeleton
              key={index}
              className="w-[40%] h-[60px] rounded-md mr-4"
            />
            <div className="flex-1">
              <Skeleton className="w-[50%] h-4 rounded-md" />
              <Skeleton className="w-full h-4 rounded-md mt-5" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
