import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { DetailResponse } from "../../shared/type";
interface RelativeMovieProp {
  data: DetailResponse;
}
export const RelativeMovie: FC<RelativeMovieProp> = ({ data }) => {
  return (
    <div className="w-[400px] h-[450px] overflow-y-auto p-3 bg-[#2a2f3a] rounded-md hidden lg:block">
      <h2 className="uppercase font-bold mb-5">Relative Movie</h2>
      {data.likeList.map((item) => (
        <Link
          to={`${data.category === 0 ? "/movie/" + item.id : "/tv/" + item.id}`}
          key={item.id}
          className="group flex gap-3 mb-5 hover:opacity-80"
        >
          <LazyLoadImage
            effect="blur"
            src={
              item.coverHorizontalUrl || item.coverVerticalUrl || item.upImgUrl
            }
            alt={item.name}
            className="w-[100px] h-[50px] rounded-md"
          />
          <span className="group-hover:text-yellow text-ellipsis whitespace-nowrap overflow-hidden">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
