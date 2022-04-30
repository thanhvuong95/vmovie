import React, { FC } from "react";

export const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="uppercase px-3 py-1 border-solid border-l-4 border-yellow font-[500] mt-10 mb-5">
      {title}
    </h1>
  );
};
