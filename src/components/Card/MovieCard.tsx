import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { IMovie } from "../../shared/type";
interface MovieCardProp {
  item: IMovie;
}
export const MovieCard: FC<MovieCardProp> = ({ item }) => {
  return (
    <Link
      to={`${item.category === 0 ? `/movie/${item.id}` : `/tv/${item.id}`}`}
      className="group block w-full h-full  rounded-md cursor-pointer overflow-hidden shadow-sm bg-backgroundLight"
    >
      <LazyLoadImage
        alt={item.title}
        src={item.imageUrl}
        effect="blur"
        wrapperClassName="w-full h-[260px] overflow-hidden"
        className=" h-full w-full object-cover group-hover:scale-105 !transition-transform !duration-300 !ease-linear"
      />
      <h3 className="p-2 group-hover:text-yellow transition-all duration-300 ease-linear text-ellipsis overflow-hidden whitespace-nowrap">
        {item.title}
      </h3>
    </Link>
  );
};
