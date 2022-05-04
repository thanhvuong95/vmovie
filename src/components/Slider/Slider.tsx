import React, { FC } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMovie, RecommendContent } from "../../shared/type";
import { MovieCard } from "../Card/MovieCard";

interface SliderProp {
  slideItems: RecommendContent[];
}

export const Slider: FC<SliderProp> = ({ slideItems }) => {
  const swiperSlide = slideItems?.map((slide) => {
    if (slide.category) {
      const movieInfo: IMovie = {
        id: slide.id,
        category: slide.category,
        imageUrl: slide.imageUrl,
        title: slide.title,
      };
      return (
        <SwiperSlide key={slide.id} className="w-[175px]">
          <MovieCard item={movieInfo} />
        </SwiperSlide>
      );
    }
  });

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={"auto"}
      navigation
    >
      {swiperSlide}
    </Swiper>
  );
};
