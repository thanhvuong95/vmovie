export interface HomeResponse {
  pageParams: string | number[];
  pages: string;
}
export interface PageResponse {
  page: number;
  recommendItems: RecommendItem[];
  searchKeyWord: string;
}

export interface RecommendItem {
  bannerProportion: null | number;
  blockGroupNum: null | number;
  coverType: null | number;
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: RecommendContent[];
  refId: null | number;
  refRedirectUrl: string;
}

export interface RecommendContent {
  category: null | number;
  contentType: string;
  id: number;
  imageUrl: string;
  jumpAddress: string;
  jumpType: string;
  needLogin: boolean;
  resourceNum: null | number;
  resourceStatus: null | number;
  showMark: boolean;
  title: string;
}
