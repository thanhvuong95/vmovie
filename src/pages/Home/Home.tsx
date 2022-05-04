import React, { useCallback, useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import {
  BannerSlider,
  HomeList,
  HomeTopSearch,
  Skeleton,
  SkeletonSlider,
  SkeletonTopSearch,
} from "../../components";
import { getHome } from "../../services";
import { PageResponse, RecommendItem } from "../../shared/type";

const Home = () => {
  const mainRef = useRef<HTMLElement>(null);

  const {
    isLoading,
    data,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery<PageResponse, Error>(
    "home",
    ({ pageParam = 0 }) => getHome(pageParam),
    {
      getNextPageParam: (lastPage: any, pages) => {
        if (lastPage?.recommendItems?.length) return pages.length;
        else return undefined;
      },
    }
  );

  const infiniteList = data?.pages.reduce(
    (acc, current) => {
      current.recommendItems
        .filter((item) => !item.bannerProportion)
        .forEach((item) =>
          item.homeSectionType === "BANNER"
            ? (acc.banner = [...acc.banner, item])
            : (acc.other = [...acc.other, item])
        );
      return acc;
    },
    {
      banner: [],
      other: [],
    } as {
      banner: RecommendItem[];
      other: RecommendItem[];
    }
  );

  const handleInfinite = useCallback(() => {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = mainRef.current?.getBoundingClientRect().bottom;
    const offsetHeight = 100;

    if (
      elementHeight &&
      elementHeight < windowHeight + offsetHeight &&
      hasNextPage
    ) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfinite);
    return () => window.removeEventListener("scroll", handleInfinite);
  }, [handleInfinite]);

  if (isLoading) {
    return (
      <main>
        <Skeleton className="h-[50vh]" />
        <div className="app-container">
          <div className="flex gap-8 pb-6">
            <div className="overflow-hidden">
              <SkeletonSlider />
            </div>
            <SkeletonTopSearch />
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <h1 className="grid place-content-center h-screen text-red-600 text-3xl">
        {error.message}
      </h1>
    );
  }

  if (!data?.pages.length) {
    return (
      <div className="grid place-content-center h-screen text-red-600 text-center">
        <img src="./no-data.png" alt="" className="w-full max-w-[400px]" />
        <p className="pt-4">No data result.</p>
      </div>
    );
  }

  return (
    <main ref={mainRef}>
      {infiniteList?.banner.map((item, i) => (
        <BannerSlider slideItems={item.recommendContentVOList} key={i} />
      ))}
      <div className="app-container">
        <div className="flex gap-8">
          <div className="flex-1 overflow-hidden">
            {infiniteList?.other.map((item, i) => (
              <HomeList key={i} slideItem={item} />
            ))}
            {isFetchingNextPage && (
              <div className="overflow-hidden">
                <SkeletonSlider />
              </div>
            )}
          </div>
          <HomeTopSearch />
        </div>
      </div>
    </main>
  );
};

export default Home;
