import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import React from 'react';

import TeamMenu from "./Team/TeamMenu";
import AccountMenu from "./Account/AccountMenu";
import ExploreMenu from "./Explore/ExploreMenu";
import WorkStatus from "./WorkStatus/WorkStatus";
import AvatarMenu from './Avatar/AvatarMenu';

const NavbarUserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <AvatarMenu handleClick={handleClick} open={open} />
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 380,
            backgroundColor: "#1e2238",
            color: "white",
            borderRadius: "1rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #3a3e55",
            padding: "1rem",
          },
        }}
      >
        {/* Team Name */}
        <TeamMenu />
        {/* Menu */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginTop: "1rem",
          }}
        >
          {/* LEFT - ACCOUNT */}
          <AccountMenu />

          {/* RIGHT - EXPLORE */}
          <ExploreMenu />
        </Box>

        {/* Working Status */}
        <WorkStatus />
      </Menu>
    </Box>
  )
};

export default NavbarUserMenu;
