import React from "react";
import { Box } from "@mui/material";
import NavBar from "@components/navigation/NavBar";
import SideBar from "@components/navigation/SideBar";
import { NAV_BAR_HEIGHT } from "@utils/constants";

import { APP_BG_COLOR_LV_1_DARK } from "@utils/constants";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ height: "100vh", bgcolor: APP_BG_COLOR_LV_1_DARK }}>
    <NavBar />
    <Box sx={{display: "flex", pl: 2, pr:0, height: `calc(100vh - ${NAV_BAR_HEIGHT}px)`}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, overflowY: "auto", borderRadius: "0.5rem" }}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default AppLayout;
