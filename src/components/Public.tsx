import React, { FC } from "react";
import { Header, Footer } from "./index";
import { Outlet } from "react-router-dom";

const Public: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Public;
