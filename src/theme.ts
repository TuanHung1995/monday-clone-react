import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0073EA", // xanh Monday
    },
    secondary: {
      main: "#F6F9FB", // xám nhẹ
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;
