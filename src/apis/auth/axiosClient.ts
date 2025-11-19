import axios from "axios";
import { useAuthStore } from "@store/auth.store";

export const axiosClient = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true, // nếu dùng httpOnly cookies
  baseURL: "http://localhost:8080",
});

axiosClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const refresh = await useAuthStore
          .getState()
          .refreshTokenSilently();

        if (refresh) {
          return axiosClient(original);
        }
      } catch (_) {
        useAuthStore.getState().logout();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);
