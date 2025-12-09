import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authApi } from "@apis/auth/authApi";

interface AuthState {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>; // Check Session (Cookie) còn hợp lệ không
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true, // Waiting for checkAuth on app start

      // Function to call API /me to check if the Cookie is still valid
      checkAuth: async () => {
        // set({ isLoading: true });
        try {
          // Call API to get user info. If the Cookie is valid, backend will return data.
          const user = await authApi.getMe();
          set({ user, isAuthenticated: true });
        } catch (error) {
          // If error (401), it means not logged in or cookie expired
          set({ user: null, isAuthenticated: false });
        } finally {
          set({ isLoading: false });
        }
      },

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const res = await authApi.login(email, password);
          // Backend set Cookie xong, ta chỉ cần lưu user info
          set({
            user: res.user, 
            isAuthenticated: true,
          });
          return true;
        } catch (err) {
          console.error(err);
          return false;
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        try {
            // 1. Gọi Backend để xóa Cookie
            await authApi.logout(); 
        } catch (error) {
            console.error("Logout API failed", error);
        }
        
        // 2. Xóa state ở Frontend
        set({ user: null, isAuthenticated: false });
        localStorage.setItem("auth-store", JSON.stringify({ user: null, isAuthenticated: false }));
        
        // 3. Redirect về Login (dùng window.location để clear sạch bộ nhớ)
        window.location.href = "/login";
      },
    }),
    {
      name: "auth-store",
      // Chỉ lưu user info, không lưu trạng thái loading
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);