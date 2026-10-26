import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1122/api/v2";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || 'Có lỗi xảy ra';
    console.error(`API Error: ${message}`, error);

    return Promise.reject(error);
  }
);

export default axiosClient;