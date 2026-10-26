import React, { useState } from "react";
import { Button, TextField, Alert, Box, CircularProgress } from "@mui/material";
import { userApi } from "@apis/user/userApi";
import type { ChangePasswordRequest } from "../../../../../../types/auth";

export const PasswordTab = () => {
  const [formData, setFormData] = useState<ChangePasswordRequest>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Style chung cho Input để khớp với Dark Theme
  const inputSx = {
    "& .MuiInputBase-input": { color: "#dcdfe4" },
    "& .MuiInputLabel-root": { color: "#676879" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#0073ea" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#2f324e" },
      "&:hover fieldset": { borderColor: "#5c5f7a" },
      "&.Mui-focused fieldset": { borderColor: "#0073ea" },
    },
    marginBottom: "20px",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear lỗi khi user bắt đầu gõ lại
    if (error) setError(null);
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);

    try {
      setLoading(true);
      // 2. Gọi API
      await userApi.changePassword(formData);
      
      setSuccess("Password updated successfully!");
      
      // Reset form
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });

    } catch (err: any) {
      // 3. Xử lý lỗi từ Backend trả về
      const message = err.response?.data?.message || "Password must contain at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 animate-fade-in max-w-2xl">
      <h2 className="text-2xl font-semibold text-white mb-2">Change Password</h2>
      <p className="text-gray-400 mb-8 text-sm">
        Choose a strong password and don't reuse it for other accounts.
      </p>

      <Box component="form" noValidate autoComplete="off">
        {/* Thông báo Lỗi / Thành công */}
        {error && (
          <Alert severity="error" sx={{ mb: 3, backgroundColor: "#3f1a23", color: "#ff808b" }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 3, backgroundColor: "#153328", color: "#00ca72" }}>
            {success}
          </Alert>
        )}

        <TextField
          label="Current Password"
          name="oldPassword"
          type="password"
          fullWidth
          variant="outlined"
          value={formData.oldPassword}
          onChange={handleChange}
          sx={inputSx}
        />

        <TextField
          label="New Password"
          name="newPassword"
          type="password"
          fullWidth
          variant="outlined"
          value={formData.newPassword}
          onChange={handleChange}
          sx={inputSx}
        />

        <TextField
          label="Confirm New Password"
          name="confirmNewPassword"
          type="password"
          fullWidth
          variant="outlined"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          sx={inputSx}
        />

        <div className="mt-4 flex justify-end">
            <Button 
                variant="contained" 
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                    backgroundColor: "#0073ea",
                    textTransform: "none",
                    padding: "8px 24px",
                    fontSize: "14px",
                    fontWeight: 500,
                    "&:hover": { backgroundColor: "#0060b9" }
                }}
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Update Password"}
            </Button>
        </div>
      </Box>
    </div>
  );
};