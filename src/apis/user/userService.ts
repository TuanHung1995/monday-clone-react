import { axiosClient } from "@apis/auth/axiosClient";
import type { UserProfile } from "../../types/user";

export const userService = {
  getMyProfile: async (): Promise<UserProfile> => {
    const response = await axiosClient.get("/users/me");
    console.log("User Profile Response:", response);
    return response.data;
  },
  
  // Hàm update profile nếu cần sau này
  updateProfile: async (data: Partial<UserProfile>) => {
    const response = await axiosClient.put("/users/profile", data);
    return response.data;
  }
};