import axios from "axios";
import constantApi from "../constants/constantApi";

const baseAPI = constantApi.BASE_API;
const service = axios.create({
  baseURL: baseAPI,
  timeout: 1800000
});

// Request interceptors
service.interceptors.request.use(
  config => {
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    /**
     * Have not implemented the login function,
     * temporarily comment
     */
    // if (localStorage.getItem("TOKEN_ADMIN")) {
    //   config.headers["Authorization"] =
    //     "Bearer " + localStorage.getItem("TOKEN_ADMIN");
    // }
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response.data) {
      let data = error.response.data;
      let messageGroup = [];
      let mockupError = error.response.data;
      if (typeof data.message == "object") {
        for (let item in data.message) {
          messageGroup.push(data.message[item][0]);
        }
      } else {
        messageGroup.push(data.message);
      }
      if (error.response.data.not_show_message) {
        mockupError.not_show_message = error.response.data.not_show_message;
      }
      mockupError.message = messageGroup;
    }
    return Promise.reject(error);
  }
);

export default service;

