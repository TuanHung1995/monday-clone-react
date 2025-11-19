import { axiosClient } from "./axiosClient";

export const authApi = {
  login: async (email: string, password: string) => {
    const res = await axiosClient.post("/auth/login", { email, password });
    return res.data;
  },

  refresh: async () => {
    const res = await axiosClient.post("/auth/refresh");
    return res.data;
  },
};
