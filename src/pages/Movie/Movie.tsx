import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  NotFound,
  RelativeMovie,
  SkeletonTopSearch,
  Watch,
} from "../../components";
import { getMovieById } from "../../services/movie";
import { InfoType } from "../../shared/type";
const Movie = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<InfoType, Error>(
    ["movies", id],
    () => getMovieById(id as string)
  );

  if (isLoading) {
    return (
      <div className="py-[100px]">
        <div className="app-container">
          <div className="flex gap-5">
            <div className="flex-1">
              <div className="w-full h-[400px] bg-backgroundLight animate-pulse"></div>
              <div className="w-[200px] h-[20px] my-4 bg-backgroundLight animate-pulse rounded-md"></div>
              <div className="md:w-[50%] w-full h-[20px] my-4 bg-backgroundLight animate-pulse rounded-md"></div>
            </div>
            <SkeletonTopSearch />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <NotFound message={error.message} />;
  }

  return (
    <div className="py-[100px]">
      <div className="app-container">
        <div className="flex gap-5">
          {data && (
            <>
              <Watch
                data={data.data}
                sources={data.sources}
                subtitles={data.subtitles}
                episodeIdx={0}
              />
              <RelativeMovie data={data.data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
