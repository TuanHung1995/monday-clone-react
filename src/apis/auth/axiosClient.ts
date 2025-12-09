import axios from "axios";
import { useAuthStore } from "@store/auth.store";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1122/api/v1";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
  withCredentials: true, 
});

axiosClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axiosClient.post("/auth/refresh-token");
        return axiosClient(originalRequest);
      } catch (refreshError) {
        // Logout state
        useAuthStore.getState().logout();
        
        // --- FIX QUAN TRỌNG: Kiểm tra xem đang ở đâu trước khi redirect ---
        if (window.location.pathname !== "/login") {
            window.location.href = "/login";
        }
        
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);