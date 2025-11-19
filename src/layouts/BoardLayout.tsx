import React from "react";
import Box from "@mui/material/Box";
import NavBar from "@components/navigation/NavBar";
import SideBar from "@components/navigation/SideBar";
import { NAV_BAR_HEIGHT } from "@utils/constants";
import { Outlet } from "react-router-dom";

import { APP_BG_COLOR_LV_1_DARK } from "@utils/constants";

function BoardLayout() {
    return (
        <Box sx={{ height: "100vh", bgcolor: APP_BG_COLOR_LV_1_DARK }}>
            <NavBar />
            <Box sx={{ display: "flex", pl: 2, pr: 0, height: `calc(100vh - ${NAV_BAR_HEIGHT}px)` }}>
                <SideBar />
                <Box sx={{ flexGrow: 1, overflowY: "auto", borderRadius: "0.5rem" }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
};

export default BoardLayout;
