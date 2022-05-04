import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendContent } from "../../shared/type";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      {slideItems.map((slide) => {
        const searchParams = new URL(slide.jumpAddress).searchParams;
        const bannerId = searchParams.get("id");
        if (bannerId) {
          return (
            <SwiperSlide key={slide.id}>
              <Link
                to={`${
                  searchParams.get("type") === "0"
                    ? `/movie/${bannerId}`
                    : `/tv/${bannerId}`
                }`}
              >
                <div className="w-full md:h-[400px] h-auto  cursor-pointer overflow-hidden shadow-sm bg-backgroundLight relative">
                  <LazyLoadImage
                    alt={slide.title}
                    src={slide.imageUrl}
                    effect="blur"
                    wrapperProps={{ className: "w-full block" }}
                    className="w-full object-cover object-center"
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
};
