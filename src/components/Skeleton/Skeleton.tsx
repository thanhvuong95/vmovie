import React, { FC } from "react";

interface SkeletonProp {
  className?: string;
}

export const Skeleton: FC<SkeletonProp> = ({ className }) => {
  return (
    <div className={`animate-pulse bg-backgroundLight ${className}`}></div>
  );
};
