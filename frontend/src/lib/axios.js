import axios from "axios";

const BASE_URL =
import.meta.env.MODE === "development" ? "http://localhost:1235/" : "/";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
