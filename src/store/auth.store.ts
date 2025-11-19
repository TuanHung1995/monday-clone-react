import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authApi } from "@apis/auth/authApi";

interface AuthState {
  user: any;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshTokenSilently: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      login: async (email, password) => {
        try {
          const res = await authApi.login(email, password);

          set({
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
            isAuthenticated: true,
          });

          return true;
        } catch (err) {
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        });
      },

      refreshTokenSilently: async () => {
        try {
          const res = await authApi.refresh();

          set({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });

          return true;
        } catch (e) {
          return false;
        }
      },
    }),
    {
      name: "auth-store",
    }
  )
);
