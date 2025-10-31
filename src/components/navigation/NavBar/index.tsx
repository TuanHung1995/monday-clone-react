// import React from "react";
// import { AppBar, Toolbar, Box, IconButton, Typography, InputBase, useTheme } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useColorScheme } from "@mui/material/styles";

// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// interface TopBarProps {
//   onMenuToggle?: () => void;
// }

// const NavBar: React.FC<TopBarProps> = ({ onMenuToggle }) => {
//   const theme = useTheme();
//   const { mode, setMode } = useColorScheme();

//   return (
//     <AppBar
//       position="sticky"
//       elevation={0}
//       color="default"
//       sx={{
//         borderBottom: `1px solid ${theme.palette.divider}`,
//         zIndex: theme.zIndex.drawer + 1,
//       }}
//     >
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
//         {/* Left Section */}
//         <Box display="flex" alignItems="center" gap={1}>
//           <IconButton onClick={onMenuToggle} edge="start">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ fontWeight: 600 }}>
//             My Work
//           </Typography>
//         </Box>

//         {/* Search */}
//         <Box
//           sx={{
//             position: "relative",
//             borderRadius: 2,
//             backgroundColor: theme.palette.action.hover,
//             "&:hover": { backgroundColor: theme.palette.action.selected },
//             width: 300,
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               height: "100%",
//               display: "flex",
//               alignItems: "center",
//               pl: 1.5,
//             }}
//           >
//             <SearchIcon fontSize="small" />
//           </Box>
//           <InputBase
//             placeholder="Search boards, tasks, people..."
//             sx={{
//               pl: 5,
//               pr: 1,
//               width: "100%",
//               fontSize: 14,
//             }}
//           />
//         </Box>

//         {/* Right Section */}
//         <Box display="flex" alignItems="center" gap={2}>
//           <IconButton>
//             <NotificationsNoneIcon />
//           </IconButton>

//           <IconButton
//             onClick={() => setMode(mode === "light" ? "dark" : "light")}
//           >
//             {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
//           </IconButton>

//           <Box
//             component="img"
//             src="/assets/avatar.jpg"
//             alt="user"
//             sx={{
//               width: 36,
//               height: 36,
//               borderRadius: "50%",
//               cursor: "pointer",
//             }}
//           />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

import NavbarLogo from "./Logo";
import NavbarActions from "./Actions";
import NavbarIcons from "./Icons";
import NavbarUserMenu from "./Menus";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#262c4a] text-white">
      {/* Left: Logo + Actions */}
      <div className="flex items-center gap-4">
        <Link to="/home">
          <NavbarLogo />
        </Link>
        <NavbarActions />
      </div>

      {/* Right: Icons + User */}
      <div className="flex items-center gap-4">
        <NavbarIcons />
        <NavbarUserMenu />
      </div>
    </header>
  );
};

export default Navbar;

