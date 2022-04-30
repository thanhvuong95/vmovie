import React, { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Loading } from "../Loading/Loading";
const Layout = React.lazy(() => import("../../pages/Layout"));
const Discovery = React.lazy(() => import("../../pages/Discovery/Discovery"));
const Explore = React.lazy(() => import("../../pages/Explore/Explore"));
const Home = React.lazy(() => import("../../pages/Home/Home"));
const Recent = React.lazy(() => import("../../pages/Recent/Recent"));
const Auth = React.lazy(() => import("../../pages/Auth/Auth"));

export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="discovery" element={<Discovery />} />
            <Route path="explore" element={<Explore />} />
            <Route path="recent" element={<Recent />} />
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
