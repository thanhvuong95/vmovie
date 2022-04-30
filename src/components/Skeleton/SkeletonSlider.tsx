import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Skeleton } from "./Skeleton";
export const SkeletonSlider = () => {
  return (
    <div className="mt-12">
      <Skeleton className="w-[25%]  h-6 rounded-md mb-6" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation
      >
        {[...new Array(Math.ceil(window.innerWidth / 200))].map((_, index) => (
          <SwiperSlide className="w-[175px]" key={index}>
            <Skeleton className="w-full h-[300px] rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
