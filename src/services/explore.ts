import axiosClient from "../shared/api";
import { SearchAdvancedResult, SearchConfigResponse } from "../shared/type";
import { SearchParams } from "./../shared/type";

export const getSearchConfig = (): Promise<SearchConfigResponse[]> => {
  return axiosClient.get("/search/list");
};

export const getSearchAdvanced = (
  params: SearchParams,
  sort: string
): Promise<SearchAdvancedResult> => {
  return axiosClient.post("/search/v1/search", { ...params, sort });
};
