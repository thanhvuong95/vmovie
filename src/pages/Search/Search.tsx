import React, { useCallback, useEffect, useRef } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Loading, MovieCard, NotFound } from "../../components";
import { searchWihKeyword } from "../../services/search";
import { SearchResponse } from "../../shared/type";

const Search = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const { search } = useLocation();
  const searchUrl = new URLSearchParams(search);
  const searchValue = searchUrl.get("q");
  const {
    isLoading,
    error,
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery<SearchResponse, Error>(
    ["search", searchValue],
    ({ pageParam: sortParam }) =>
      searchWihKeyword(searchValue as string, sortParam),
    {
      getNextPageParam: (lastPage, pages) => {
        // call api by param size, data result don't contain (page, totalRows ,...) => can't fetch infinite => fake fetch infinite with sort param => conflict data result.
        if (lastPage.searchResults.length >= 24) {
          // fetch infinite if data result >= 24 => avoid conflict data
          return lastPage.searchResults.slice(-1)[0].sort || "";
        } else return undefined;
      },
    }
  );

  const handleLoadInfinite = useCallback(() => {
    console.log();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = searchRef.current?.getBoundingClientRect().bottom;
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
    window.addEventListener("scroll", handleLoadInfinite);
    return () => window.removeEventListener("scroll", handleLoadInfinite);
  }, [handleLoadInfinite]);

  if (isLoading) {
    return (
      <div className="h-screen grid place-content-center">
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div className="py-[100px]">
        <NotFound message={error?.message} />
      </div>
    );
  }
  if (!data) {
    return (
      <div className="py-[100px]">
        <div className="app-container">
          <h2 className="text-2xl ">
            Search result for keyword: {searchValue}
          </h2>
          <span>No data result.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-[100px]">
      <div className="app-container">
        <h2 className="text-2xl ">Search result for keyword: {searchValue} </h2>
        <div
          ref={searchRef}
          className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-1 gap-5 mt-4"
        >
          {data.pages.map((page) =>
            page.searchResults.map((item) => (
              <MovieCard
                key={item.id}
                item={{
                  id: Number(item.id),
                  category: item.domainType,
                  imageUrl:
                    item.coverHorizontalUrl ||
                    item.coverVerticalUrl ||
                    item.upInfo.upImgUrl,
                  title: item.name,
                }}
              />
            ))
          )}
        </div>
        <div
          className={` justify-center mt-8 ${
            isFetchingNextPage ? "flex" : "hidden"
          }`}
        >
          <Loading />
        </div>
      </div>
    </div>
  );
};

export default Search;
