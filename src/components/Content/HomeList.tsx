import React, { FC } from "react";
import { RecommendItem } from "../../shared/type";
import { Slider } from "../Slider/Slider";
import { Title } from "../Title/Title";

interface HomeListProp {
  slideItem: RecommendItem;
}

export const HomeList: FC<HomeListProp> = ({ slideItem }) => {
  return (
    <div className="mt-12 mb-12">
      <Title title={slideItem.homeSectionName} />
      <Slider slideItems={slideItem.recommendContentVOList} />
    </div>
  );
};
