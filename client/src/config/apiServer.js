import axios from "axios";
import { backendUrl } from "./index";

const instance = axios.create({
  // baseURL: backendUrl, http://localhost:8080/
  // baseURL: "https://methodic-backend.herokuapp.com/",
  //baseURL: "http://localhost:8080/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  //Error
  (err) => {
    return err.message;
  }
);

export default instance;
