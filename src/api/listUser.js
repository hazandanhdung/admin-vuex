import request from "../services/request";
import constantApi from "../constants/constantApi";


const getListTodoUsers = params => {
  return request({
    url: constantApi.BASE_API,
    method: "GET",
    params: params
  });
};

export {
  getListTodoUsers
}
