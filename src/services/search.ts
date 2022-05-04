import axiosClient from "../shared/api";
import { SearchResponse } from "../shared/type";

export const searchWihKeyword = (
  keyword: string,
  sort: string
): Promise<SearchResponse> => {
  return axiosClient.post(`search/v1/searchWithKeyWord`, {
    searchKeyWord: keyword,
    size: 24,
    sort: sort,
    searchType: "",
  });
};
