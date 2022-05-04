import React, { FC, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "../Loading/Loading";
const Layout = React.lazy(() => import("../../pages/Layout"));
const Home = React.lazy(() => import("../../pages/Home/Home"));
const Recent = React.lazy(() => import("../../pages/Recent/Recent"));
const Auth = React.lazy(() => import("../../pages/Auth/Auth"));
const Movie = React.lazy(() => import("../../pages/Movie/Movie"));
const TeleVision = React.lazy(() => import("../../pages/TV/TeleVision"));
const Explore = React.lazy(() => import("../../pages/Explore/Explore"));
const Search = React.lazy(() => import("../../pages/Search/Search"));
const NotFound = React.lazy(() =>
  import("../../components/NotFound/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);
export const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recent" element={<Recent />} />
            <Route path="explore" element={<Explore />} />
            <Route path="auth" element={<Auth />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="tv/:id" element={<TeleVision />} />
            <Route path="search" element={<Search />} />

            <Route
              path="*"
              element={<NotFound message="Oops. Page not found!" />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
