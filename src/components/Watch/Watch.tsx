import React, { FC, useRef } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import { Player } from "react-tuby";
import { DetailResponse } from "../../shared/type";
import { MovieInfo } from "./MovieInfo";
interface WatchProp {
  data: DetailResponse;
  sources: {
    quality: number;
    url: string;
  }[];
  subtitles: {
    language: any;
    url: any;
    lang: any;
  }[];
  episodeIdx: number;
  onSetEpisode?: (id: number) => void;
}
export const Watch: FC<WatchProp> = ({
  data,
  sources,
  subtitles,
  episodeIdx,
  onSetEpisode,
}) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="w-full">
      <Player
        playerRef={playerRef}
        src={sources}
        subtitles={subtitles.map((subtitle: any) => ({
          ...subtitle,
          url: `https://srt-to-vtt.vercel.app?url=${subtitle.url}`,
        }))}
      >
        {(ref, props) => (
          <ReactHlsPlayer playerRef={ref} {...props} src={props.src} />
        )}
      </Player>
      <MovieInfo data={data} />

      {data.episodeVo.length > 1 && onSetEpisode && (
        <>
          <p className="text-xl mt-3 mb-1">Episodes</p>
          <div className="flex flex-wrap gap-3 ">
            {data.episodeVo.map((epi, i) => (
              <span
                className={`px-4 py-2 bg-[#2a2f3a] rounded-md cursor-pointer hover:bg-yellow transition-all duration-150 ease-in ${
                  episodeIdx === i && "!bg-yellow"
                }`}
                onClick={() => onSetEpisode(i)}
                key={i}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
