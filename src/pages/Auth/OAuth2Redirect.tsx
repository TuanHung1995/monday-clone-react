import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "@store/auth.store";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const OAuth2Redirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loginWithToken = useAuthStore((state) => state.loginWithToken);

  useEffect(() => {
    // 1. Lấy token từ URL (do backend gửi về: /oauth2/redirect?token=...)
    const token = searchParams.get("token");

    if (token) {
      // 2. Lưu vào store (Zustand + Persist LocalStorage)
      loginWithToken(token);

      // 3. Điều hướng vào trang chính
      // Sử dụng replace: true để người dùng không back lại trang này được
      navigate("/home", { replace: true });
    } else {
      // Nếu không có token, quay về login
      navigate("/login", { replace: true });
    }
  }, [searchParams, navigate, loginWithToken]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181b34", // Màu nền tối giống theme
        color: "#fff",
      }}
    >
      <CircularProgress size={60} sx={{ mb: 4 }} />
      <Typography variant="h6">Authenticating with Google...</Typography>
    </Box>
  );
};

export default OAuth2Redirect;