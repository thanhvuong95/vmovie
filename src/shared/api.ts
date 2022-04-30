import axios from "axios";
import { BASE_URL } from "./constants";
const axiosClient = axios.create({
  baseURL: BASE_URL,
});

axiosClient.interceptors.request.use(
  function (config) {
    config.headers = {
      lang: "en",
      versioncode: 11,
      clienttype: "ios_jike_default",
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    if (response?.data?.data) return response.data.data;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
