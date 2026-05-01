import axiosClient from './axiosClient';
import type { LoginRequest } from '../../types/auth';

export const authApi = {
  login: (data: LoginRequest) => {
    return axiosClient.post('/auth/login', data);
  },

  logout: () => {
    return axiosClient.post('/auth/logout');
  },
  
  refreshToken: () => {
    return axiosClient.post('/auth/refresh-token');
  }
};