import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import {
  BannerSlider,
  HomeTopSearch,
  Skeleton,
  SkeletonSlider,
  Slider,
  Title,
} from "../../components";
import { getHome } from "../../services";
import { PageResponse, RecommendItem } from "../../shared/type";

const Home = () => {
  const { isLoading, data, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery<PageResponse, Error>(
      "home",
      ({ pageParam = 0 }) => getHome(pageParam),
      {
        getNextPageParam: (lastPage: any, pages) => {
          if (lastPage?.recommendItems?.length) return pages.length;
          else return undefined;
        },
        staleTime: 60 * 1000 * 3, //refetchOnWindowFocus after 3 minutes.
        refetchOnWindowFocus: true,
        refetchOnMount: true,
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

  if (isLoading) {
    return (
      <main>
        <Skeleton className="h-[50vh]" />
        <div className="app-container">
          <div className="flex gap-8">
            <div className="overflow-hidden">
              <SkeletonSlider />
            </div>
            <div className="w-full max-w-[300px] mt-12">
              <Skeleton className="w-[150px] h-6 rounded-md mb-6" />
              <ul className="mt-6">
                {[...new Array(4)].map((_, index) => (
                  <li className="flex items-center py-2" key={index}>
                    <Skeleton
                      key={index}
                      className="w-[40%] h-[60px] rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <Skeleton className="w-[50%] h-4 rounded-md" />
                      <Skeleton className="w-full h-4 rounded-md mt-5" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
    <main>
      {infiniteList?.banner.map((item, i) => (
        <BannerSlider slideItems={item.recommendContentVOList} key={i} />
      ))}
      <div className="app-container">
        <div className="flex gap-8">
          <div className="flex-1 overflow-hidden">
            {infiniteList?.other.map((item, i) => (
              <Fragment key={i}>
                <Title title={item.homeSectionName} />
                <Slider key={i} slideItems={item.recommendContentVOList} />
              </Fragment>
            ))}
          </div>
          <HomeTopSearch />
        </div>
      </div>
    </main>
  );
};

export default Home;
