// /src/api/axiosMock.ts
import { axiosClient } from "./axiosClient";

export function mockAuthApi() {
  axiosClient.interceptors.request.use((config) => {
    // Just let requests pass normally
    return config;
  });

  axiosClient.interceptors.response.use(async (response) => {
    const { url, method, data } = response.config;

    // ==== LOGIN MOCK ====
    if (url === "/auth/login" && method === "post") {
      return {
        ...response,
        data: {
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          user: {
            id: 1,
            email: "hung@example.com",
            fullName: "Nguyễn Tuấn Hưng",
          },
        },
      };
    }

    // ==== REFRESH TOKEN MOCK ====
    if (url === "/auth/refresh" && method === "post") {
      return {
        ...response,
        data: {
          accessToken: "mock-new-access-token",
          refreshToken: "mock-new-refresh-token",
        },
      };
    }

    return response;
  });
}