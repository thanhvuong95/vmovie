import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { RecommendContent } from "../../shared/type";
import { MovieCard } from "../Card/MovieCard";

interface SliderProp {
  slideItems: RecommendContent[];
}

export const Slider: FC<SliderProp> = ({ slideItems }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
    >
      {slideItems?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <MovieCard item={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
