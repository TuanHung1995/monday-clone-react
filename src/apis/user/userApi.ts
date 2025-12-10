import axiosClient from '../auth/axiosClient';
import { type UserProfile } from '../../types/auth';

export const userApi = {
  getMe: (): Promise<UserProfile> => {
    // API này dùng Cookie để xác thực người dùng
    return axiosClient.get('/users/me');
  }
};