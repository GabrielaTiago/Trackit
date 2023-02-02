import axios from "axios";

const methods = ["get", "post", "put", "delete"];

const axiosWrapper = {};

const queryStringBuilder = (query) =>
  Object.keys(query).length
    ? "?" +
      Object.keys(query)
        .map((k) => `${k}=${query[k]}`)
        .join("&")
    : "";

const instance = axios.create({
  baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
});

for (const method of methods) {
  axiosWrapper[method] = async function (
    route,
    body,
    headers = false,
    query = {},
    complete = false
  ) {
    try {
      const url = `${route}${queryStringBuilder(query)}`;
      const request = await instance({
        method,
        url,
        data: body,
        headers: {
          Authorization: `Bearer ${headers}`,
        },
      });
      return complete ? request : request.data;
    } catch (err) {
      console.error(err);
      return Promise.reject(err.response);
    }
  };
}

export default axiosWrapper;
