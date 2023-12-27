import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://data.moa.gov.tw/OpenData/Service/OpenData/DataFileService.aspx?",
});

/**
 * TODO
 * 1. deal request timeout
 * 2. create loading modal
 * 3. create status code modal
 */

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
