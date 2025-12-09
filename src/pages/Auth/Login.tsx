import { useState } from "react";
import { useAuthStore } from "@store/auth.store";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { Google } from "@mui/icons-material"; // Cần cài @mui/icons-material

// URL để redirect sang Google OAuth2 của backend
// Dựa trên file SecurityConfig.java và docs.md bạn cung cấp
const GOOGLE_AUTH_URL = "http://localhost:1122/oauth2/authorization/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    const success = await login(email, password);
    setLoading(false);

    if (success) {
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-[#f5f6f8] font-sans">
      <Box
        className="bg-white p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full max-w-[480px]"
        sx={{ border: "1px solid #e6e9ef" }}
      >
        {/* Logo Area */}
        <Box className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0073ea] rounded-br-xl rounded-tl-xl rounded-tr-sm rounded-bl-sm" />
            <span className="text-2xl font-bold text-[#323338] tracking-tight">
              monday.com
            </span>
          </div>
        </Box>

        <Typography
          variant="h5"
          className="text-center font-bold text-[#323338] mb-6"
        >
          Log in to your account
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Box>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Work Email
            </label>
            <TextField
              fullWidth
              placeholder="Example@company.com"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{
                input: {
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "#f7f9fa",
                    "& fieldset": { borderColor: "#d0d4e4" },
                    "&:hover fieldset": { borderColor: "#0073ea" },
                    "&.Mui-focused fieldset": { borderColor: "#0073ea" },
                    height: "48px",
                  },
                },
              }}
            />
          </Box>

          <Box>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <span className="text-xs text-[#0073ea] cursor-pointer hover:underline">
                Forgot your password?
              </span>
            </div>
            <TextField
              fullWidth
              type="password"
              placeholder="Enter your password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  sx: {
                    borderRadius: "8px",
                    backgroundColor: "#f7f9fa",
                    "& fieldset": { borderColor: "#d0d4e4" },
                    "&:hover fieldset": { borderColor: "#0073ea" },
                    "&.Mui-focused fieldset": { borderColor: "#0073ea" },
                    height: "48px",
                  },
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              backgroundColor: "#0073ea",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              boxShadow: "none",
              mt: 1,
              "&:hover": {
                backgroundColor: "#0060b9",
                boxShadow: "none",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Log in"
            )}
          </Button>
        </form>

        <Box className="my-6 flex items-center gap-2">
          <Divider sx={{ flex: 1 }} />
          <span className="text-xs text-gray-500 font-medium">
            Or Sign in with
          </span>
          <Divider sx={{ flex: 1 }} />
        </Box>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleGoogleLogin}
          startIcon={<Google />}
          sx={{
            borderColor: "#d0d4e4",
            color: "#323338",
            padding: "10px",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": {
              borderColor: "#b0b5c9",
              backgroundColor: "#f7f9fa",
            },
          }}
        >
          Google
        </Button>

        <Box className="mt-8 text-center">
          <Typography variant="body2" className="text-gray-600">
            Don't have an account yet?{" "}
            <span className="text-[#0073ea] font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
