import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Mail, Lock } from "lucide-react";

export default function MondayLogin() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0d1220",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          color="#323338"
          mb={4}
        >
          Welcome back!
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box>
            <Typography fontSize={14} fontWeight={600} color="#323338" mb={1}>
              Email
            </Typography>
            <Box sx={{ position: "relative" }}>
              <Mail size={18} style={{ position: "absolute", top: "50%", left: 12, transform: "translateY(-50%)", opacity: 0.6 }} />
              <TextField
                fullWidth
                placeholder="name@company.com"
                type="email"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    pl: 5,
                  },
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography fontSize={14} fontWeight={600} color="#323338" mb={1}>
              Password
            </Typography>
            <Box sx={{ position: "relative" }}>
              <Lock size={18} style={{ position: "absolute", top: "50%", left: 12, transform: "translateY(-50%)", opacity: 0.6 }} />
              <TextField
                fullWidth
                placeholder="Enter your password"
                type="password"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    pl: 5,
                  },
                }}
              />
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 1,
              py: 1.4,
              borderRadius: 2,
              backgroundColor: "#6161ff",
              textTransform: "none",
              fontSize: 16,
              fontWeight: 600,
              ":hover": { backgroundColor: "#4f4ff0" },
            }}
          >
            Log in
          </Button>
        </Box>

        <Typography textAlign="center" mt={4} fontSize={14} color="#676879">
          Don't have an account? <span style={{ color: "#6161ff", cursor: "pointer" }}>Sign up</span>
        </Typography>
      </Paper>
    </Box>
  );
}