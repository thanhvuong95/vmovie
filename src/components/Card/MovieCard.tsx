import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RecommendContent } from "../../shared/type";
interface MovieCardProp {
  item: RecommendContent;
}
export const MovieCard: FC<MovieCardProp> = ({ item }) => {
  console.log(item);

  return (
    <div>
      <div className="group w-full h-full  rounded-md cursor-pointer overflow-hidden shadow-sm bg-backgroundLight">
        <LazyLoadImage
          alt={item.title}
          src={item.imageUrl}
          effect="black-and-white"
          className="group-hover:scale-105 transition-all duration-300 ease-linear"
        />
        <h3 className="p-2 group-hover:text-yellow transition-all duration-100 ease-linear">
          {item.title}
        </h3>
      </div>
    </div>
  );
};
