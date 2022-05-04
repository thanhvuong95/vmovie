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

export interface TopSearchResponse {
  list: TopSearchItem[];
}
export interface TopSearchItem {
  cover: string;
  domainType: number;
  id: string;
  title: string;
}

export interface SearchConfigResponse {
  id: number;
  name: string;
  params: string;
  screeningItems: {
    id?: number;
    items: {
      name: string;
      params: string;
      screeningType: string;
    }[];
    name: string;
  }[];
}

export interface SearchParams {
  size: number;
  params: string;
  area: string;
  category: string;
  year: string;
  subtitles: string;
  order: "up" | "count";
}

export interface SearchAdvancedResponse {
  pageParams: any[];
  pages: SearchAdvancedResult[];
}

export interface SearchAdvancedResult {
  searchResults: SearchAdvancedItem[];
}
export interface SearchAdvancedItem {
  coverVerticalUrl: string;
  domainType: number;
  id: string;
  name: string;
  sort: string;
}

export interface IMovie {
  id: number;
  category: string | number;
  title: string;
  imageUrl: string;
}

//

export interface SearchResponse {
  searchResults: SearchResult[];
  searchType: string;
  starResults: any[];
}

export interface SearchResult {
  areas: AreaList[];
  categoryTag: { id: number; name: string }[];
  coverHorizontalUrl: string;
  coverVerticalUrl: string;
  domainType: number;
  dramaType: { code: string; name: string };
  duration: string;
  id: string;
  name: string;
  releaseTime: string;
  sort: string;
  upInfo: {
    enable: boolean;
    upId: number;
    upImgUrl: string;
    upName: string;
  };
}
export interface InfoType {
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
}
export interface DetailResponse {
  aliasName: string;
  areaList: AreaList[];
  areaNameList: string[];
  category: number;
  collect: boolean;
  coverHorizontalUrl: string;
  coverHorizontalUrlJson: string;
  coverVerticalUrl: string;
  drameTypeVo: DrameTypeVo;
  episodeCount: any;
  episodeRoomListVo: EpisodeRoomListVo;
  episodeVo: EpisodeVo[];
  id: string;
  introduction: string;
  likeList: LikeList[];
  name: string;
  nameJson: string;
  refList: any[];
  reserved: boolean;
  score: number;
  seriesNo: any;
  showSetName: boolean;
  starList: any[];
  tagList: TagList2[];
  tagNameList: string[];
  translateType: number;
  upInfo: UpInfo;
  updateInfo: any;
  year: number;
}

export interface AreaList {
  id: number;
  name: string;
}

export interface DrameTypeVo {
  drameName: string;
  drameType: string;
}

export interface EpisodeRoomListVo {
  category: number;
  episodeId: string;
  episodeName: string;
  number: number;
  roomId: string;
  seasonID: string;
  seasonName: string;
}

export interface EpisodeVo {
  definitionList: DefinitionList[];
  id: number;
  name: string;
  nameJson: string;
  resourceType: number;
  seriesNo: number;
  subtitlingList: SubtitlingList[];
  totalTime: number;
  vid: string;
}

export interface DefinitionList {
  code: string;
  description: string;
  fullDescription: string;
}

export interface SubtitlingList {
  language: string;
  languageAbbr: string;
  subtitlingUrl: string;
  translateType: number;
}

export interface LikeList {
  areaList: AreaList2[];
  areaNameList: string[];
  category: number;
  coverHorizontalUrl: string;
  coverVerticalUrl: string;
  drameTypeVo: any;
  id: string;
  name: string;
  score: number;
  tagList: TagList[];
  tagNameList: string[];
  upImgUrl: string;
  upName: string;
  year: number;
}

export interface AreaList2 {
  id: number;
  name: string;
}

export interface TagList {
  id: number;
  name: string;
}

export interface TagList2 {
  id: number;
  name: string;
}

export interface UpInfo {
  upId: number;
  upImgUrl: string;
  upName: string;
}

export interface MediaResponse {
  businessType: number;
  currentDefinition: string;
  episodeId: string;
  mediaUrl: string;
  totalDuration: number;
}
