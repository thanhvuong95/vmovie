import React, { FC } from "react";
import { Link } from "react-router-dom";
import { DetailResponse } from "../../shared/type";
interface MovieInfoProp {
  data: DetailResponse;
}
export const MovieInfo: FC<MovieInfoProp> = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-3">{data.name}</h2>
      <div className="flex gap-5 my-3">
        <div className="flex items-end gap-1">
          <i className="bx bxs-star text-yellow text-xl"></i>
          <span>{data.score || 0}</span>
        </div>
        <div className="flex items-end gap-1">
          <i className="bx bx-calendar text-yellow text-xl"></i>
          <span>{data.year}</span>
        </div>
      </div>
      <div className="flex gap-3 my-3">
        {data.tagList.map((item) => (
          <Link
            to="/"
            key={item.id}
            className="bg-[#2a2f3a] inline-block px-3 py-1 rounded-md"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div>{data.introduction}</div>
    </div>
  );
};
