import React, { FC } from "react";
interface NotFoundProp {
  message: string;
}
export const NotFound: FC<NotFoundProp> = ({ message }) => {
  return (
    <div className="flex flex-col items-center pt-[100px] ">
      <img src="./404.png" alt="404" className="w-full max-w-[300px]" />
      <h3>{message}</h3>
    </div>
  );
};
