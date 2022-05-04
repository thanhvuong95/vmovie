import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  NotFound,
  RelativeMovie,
  SkeletonTopSearch,
  Watch,
} from "../../components";
import { getTVById } from "../../services/tv";
import { InfoType } from "../../shared/type";

const TeleVision = () => {
  const { id } = useParams();
  const [episodeIdx, setEpisodeIdx] = useState<number>(0);

  const handleChangeEspisode = (id: number) => {
    setEpisodeIdx(id);
  };

  const { isLoading, error, data } = useQuery<InfoType, Error>(
    ["TV", id, episodeIdx],
    () => getTVById(id as string, episodeIdx)
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
                episodeIdx={episodeIdx}
                onSetEpisode={handleChangeEspisode}
              />
              <RelativeMovie data={data.data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeleVision;
