import { TopSearchResponse } from "./../shared/type";
import axiosClient from "../shared/api";
import { PageResponse } from "../shared/type";

export const getHome = (pageParam: number): Promise<PageResponse> => {
  return axiosClient.get(`homePage/getHome?page=${pageParam}`);
};

export const getTopSearch = (): Promise<TopSearchResponse> => {
  return axiosClient.get("/search/v1/searchLeaderboard");
};
