import React from "react";
import { Box } from "@mui/material";
import NavBar from "@components/navigation/NavBar";
import SideBar from "@components/navigation/SideBar";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ display: "flex" }}>
    <SideBar />
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default AppLayout;
