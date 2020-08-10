import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://37.140.197.3/api/",
  headers: {
    common: {
      Authorization: `Token 8dd57f8387674e5396bd487a560401ee4c74a1ed`,
      "Content-Type": "multipart/form-data",
    },
  },
});

HTTP.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 408;
    if (status >= 500) {
      console.error(error.toString());
    }
    if (status === 401) {
      console.log("logout");
    }
    return Promise.reject(error);
  }
);

export default HTTP;
