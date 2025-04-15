import axios from "axios";

const options = {
  baseURL:
    import.meta.env.VITE_NODE_ENV === "development"
      ? import.meta.env.VITE_BASE_URL
      : "",
  withCredentials: true,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { status: statusCode, data } = error.response;
    return Promise.reject({ statusCode, ...data });
  }
);

export default API;
