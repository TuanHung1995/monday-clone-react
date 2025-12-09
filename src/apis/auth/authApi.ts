import axiosClient from './axiosClient';
import { type LoginRequest } from '../../types/auth';

export const authApi = {
  login: (data: LoginRequest) => {
    // Backend sẽ set Cookie tại đây, không cần return token
    return axiosClient.post('/auth/login', data);
  },

  logout: () => {
    // Backend sẽ xóa Cookie
    return axiosClient.post('/auth/logout');
  },
  
  // API refresh token (nếu cần xử lý silent refresh sau này)
  refreshToken: () => {
    return axiosClient.post('/auth/refresh-token');
  }
};