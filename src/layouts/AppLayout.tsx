import React from "react";
import { Box } from "@mui/material";
import NavBar from "@components/navigation/NavBar";
import SideBar from "@components/navigation/SideBar";
import { NAV_BAR_HEIGHT } from "@utils/constants";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ height: "100vh", bgcolor: "#292e4b" }}>
    <NavBar />
    <Box sx={{display: "flex", px: 2, height: `calc(100vh - ${NAV_BAR_HEIGHT}px)`}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, overflowY: "auto", borderRadius: "0.5rem" }}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default AppLayout;
