import axiosClient from '../auth/axiosClient';
import type { UserProfile, ChangePasswordRequest } from '../../types/auth';

export const userApi = {
  getMe: (): Promise<UserProfile> => {
    // API này dùng Cookie để xác thực người dùng
    return axiosClient.get('/users/me');
  },

  changePassword: (data: ChangePasswordRequest) => {
    return axiosClient.put("/users/change-password", data);
  },
};