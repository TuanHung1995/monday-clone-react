import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";

import Avatar from "./Avatar/Avatar";
import Dropdown from "./Dropdown/Dropdown";

const NavbarUserMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 10,
      }}
      ref={menuRef}
    >
      {/* Avatar */}
      <Box onClick={() => setOpen((p) => !p)}>
        <Avatar />
      </Box>

      {/* Dropdown */}
      {open && (
        <Dropdown ref={menuRef} />
      )}
    </Box>
  );
};

export default NavbarUserMenu;
