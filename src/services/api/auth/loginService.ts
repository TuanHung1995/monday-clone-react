import { axiosClient } from "@apis/auth/axiosClient";

export const loginService = async (email: string, password: string) => {
  const response = await axiosClient.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};