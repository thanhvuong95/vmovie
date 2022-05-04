import axiosClient from "../shared/api";
import { DetailResponse, InfoType, MediaResponse } from "../shared/type";

const getMediaUrl = (
  params: {
    category: number;
    contentId: string;
    episodeId: number;
    definition: string;
  }[]
): Promise<MediaResponse[]> => {
  return axiosClient.post("media/bathGetplayInfo", params);
};

export const getTVById = async (
  id: string,
  episodeIdx: number
): Promise<InfoType> => {
  try {
    const data: DetailResponse = await axiosClient.get("/movieDrama/get", {
      params: {
        id,
        category: 1,
      },
    });

    const paramsInfo = data.episodeVo[0].definitionList.map((esp) => ({
      category: 0,
      contentId: id,
      episodeId: data.episodeVo[episodeIdx].id,
      definition: esp.code,
    }));

    const mediaUrls = await getMediaUrl(paramsInfo);

    const sources = mediaUrls.map((url, i) => ({
      quality: Number(
        data.episodeVo[0].definitionList[i].description
          .toLowerCase()
          .replace("p", "")
      ),
      url: url.mediaUrl,
    }));

    const subtitles = data.episodeVo[0].subtitlingList.map((sub: any) => ({
      language: sub.language,
      url: sub.subtitlingUrl,
      lang: sub.languageAbbr,
    }));
    // react query require return promise
    return Promise.resolve({
      data,
      sources,
      subtitles,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
