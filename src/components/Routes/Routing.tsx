import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth, Discovery, Explore, Home, Recent } from "../../pages";
import Public from "../Public";

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Home />} />
          <Route path="discovery" element={<Discovery />} />
          <Route path="explore" element={<Explore />} />
          <Route path="recent" element={<Recent />} />
        </Route>
        <Route path="auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
