import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";

const drawerWidth = 260;

const Sidebar = () => {
  const theme = useTheme();

  const navItems = [
    { label: "My Work", icon: <AssignmentTurnedInIcon />, path: "/my-work" },
    { label: "Boards", icon: <DashboardIcon />, path: "/boards" },
    { label: "Teams", icon: <GroupIcon />, path: "/teams" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        },
      }}
    >
      {/* Workspace Section */}
      <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography variant="subtitle1" fontWeight={600}>
          My Workspace
        </Typography>
      </Box>

      {/* Navigation */}
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography fontWeight={500} fontSize={14}>
                  {item.label}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>

      {/* Bottom Create Section */}
      <Box sx={{ mt: "auto", p: 2 }}>
        <ListItemButton sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 1 }}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="New Board" />
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
