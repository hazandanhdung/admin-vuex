import request from "../services/request";
import constantApi from "../constants/constantApi";

const getListTodoUsers = (params) => {
  return request({
    url: `${constantApi.apiBaseUrl} + /user`,
    method: "GET",
    params: params,
  });
};

export { getListTodoUsers };
