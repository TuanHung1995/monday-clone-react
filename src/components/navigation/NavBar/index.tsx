import NavbarLogo from "./Logo";
import NavbarActions from "./Actions";
import NavbarIcons from "./Icons";
import NavbarUserMenu from "./Menus";
import { Link } from "react-router";
import { NAV_BAR_HEIGHT, NAV_BAR_PADDING } from "@utils/constants";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-[#262c4a] text-white`"
      style={{ 
        height: NAV_BAR_HEIGHT,
        padding: NAV_BAR_PADDING
       }}
      >
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

