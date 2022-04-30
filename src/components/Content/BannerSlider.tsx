import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendContent } from "../../shared/type";

interface BannerSliderProp {
  slideItems: RecommendContent[];
}
export const BannerSlider: FC<BannerSliderProp> = ({ slideItems }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay
      speed={500}
      loop
    >
      {slideItems.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div>
            <div className="w-full h-[400px]  cursor-pointer overflow-hidden shadow-sm bg-backgroundLight relative">
              <LazyLoadImage
                alt={slide.title}
                src={slide.imageUrl}
                effect="black-and-white"
                wrapperProps={{ className: "w-full" }}
                className="w-full object-cover object-center"
              />
              <h2 className="capitalize absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-secondary text-[100px] text-yellow text-center text-shadow">
                {slide.title}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
