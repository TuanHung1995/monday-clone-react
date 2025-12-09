import { axiosClient } from "./axiosClient";

export const authApi = {
  login: async (email: string, password: string) => {
    const res = await axiosClient.post("/auth/login", { email, password });
    return res.data;
  },

  refresh: async () => {
    const res = await axiosClient.post("/auth/refresh-token");
    return res.data;
  },

  getMe: async () => {
    const res = await axiosClient.get("/users/me");
    return res.data;
  },

  logout: async () => {
    return await axiosClient.post("/auth/logout");
  }
};
