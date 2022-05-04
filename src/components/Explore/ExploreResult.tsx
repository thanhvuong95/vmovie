import React, { FC } from "react";
import { useInfiniteQuery } from "react-query";
import { getSearchAdvanced } from "../../services";
import {
  IMovie,
  SearchAdvancedItem,
  SearchAdvancedResult,
  SearchParams,
} from "../../shared/type";
import { MovieCard } from "../Card/MovieCard";
import { Loading } from "../Loading/Loading";
import { NotFound } from "../NotFound/NotFound";
interface ExploreResultProp {
  params: SearchParams;
}
export const ExploreResult: FC<ExploreResultProp> = ({ params }) => {
  const {
    isLoading,
    error,
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery<SearchAdvancedResult, Error>(
    ["searchAdvanced", { ...params }],
    ({ pageParam: sortParam }) => getSearchAdvanced(params, sortParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.searchResults.length) {
          return lastPage.searchResults.slice(-1)[0].sort || "";
        } else return undefined;
      },
    }
  );

  const searchResult = data?.pages
    .reduce(
      (acc: SearchAdvancedItem[], current) => [
        ...acc,
        ...current.searchResults,
      ],
      []
    )
    .map((item) => {
      const movieItem: IMovie = {
        id: Number(item.id),
        category: item.domainType,
        title: item.name,
        imageUrl: item.coverVerticalUrl,
      };
      return <MovieCard item={movieItem} key={item.id} />;
    });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }
  if (error) {
    return <NotFound message={error.message} />;
  }

  if (!data) {
    <NotFound message={"Something went wrong. Please try again later!"} />;
  }

  return (
    <>
      <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-1 gap-5">
        {searchResult}
      </div>
      <div className="mt-8 text-center">
        {hasNextPage && (
          <button
            className="bg-yellow text-white px-4 py-2 rounded-md flex items-center justify-center mx-auto "
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage && (
              <span className="inline-block w-4 h-4 border-2 border-solid border-white rounded-full border-t-2 border-t-yellow mr-2 animate-spin"></span>
            )}
            Load More
          </button>
        )}
      </div>
    </>
  );
};
