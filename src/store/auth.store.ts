import { create } from 'zustand';
import { authApi } from '../apis/auth/authApi';
import { userApi } from '../apis/user/userApi';
import { type AuthState } from '../types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true, // Mặc định đang load để check session lúc khởi động

  login: async (loginData) => {
    try {
      // 1. Gọi API Login (Server set Cookie)
      await authApi.login(loginData);

      // 2. Gọi API lấy thông tin User ngay lập tức
      const userProfile = await userApi.getMe();

      // 3. Cập nhật Store
      set({ 
        isAuthenticated: true, 
        user: userProfile,
        isLoading: false 
      });
    } catch (error) {
      console.error("Login Failed:", error);
      throw error; // Ném lỗi để UI hiển thị thông báo
    }
  },

  logout: async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.warn("Logout error on server", error);
    } finally {
      // Luôn xóa state ở client dù server lỗi hay không
      set({ isAuthenticated: false, user: null });
      // Redirect về login sẽ được xử lý ở Router hoặc Component
    }
  },

  checkSession: async () => {
    try {
      set({ isLoading: true });
      // Gọi API /me. Nếu Cookie còn hạn -> Success. Hết hạn -> 401 Error
      const userProfile = await userApi.getMe();
      set({ 
        isAuthenticated: true, 
        user: userProfile 
      });
    } catch (error) {
      // Nếu lỗi (401), coi như chưa đăng nhập
      set({ isAuthenticated: false, user: null });
    } finally {
      set({ isLoading: false });
    }
  }
}));