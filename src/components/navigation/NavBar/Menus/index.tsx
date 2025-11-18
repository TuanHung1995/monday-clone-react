import { useEffect, useRef, useState } from "react";

import Portal from "@utils/Portal";

import WorkStatus from "./WorkStatus/WorkStatus";
import AccountMenu from "./Account/AccountMenu";
import ExploreMenu from "./Explore/ExploreMenu";

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
    <div className="relative z-10" ref={menuRef}>
      {/* Avatar */}
      <div
        className="w-9 h-9 rounded-full bg-[#5b5fff] text-white flex items-center justify-center cursor-pointer font-semibold select-none"
        onClick={() => setOpen((p) => !p)}
      >
        T
      </div>

      {/* Dropdown */}
      {open && (
        <Portal>
          <div
            className="fixed top-0 left-0 w-full h-full"
            style={{ zIndex: 99999 }}
          >
            <div
              ref={menuRef}
              className="absolute right-5 top-[60px] w-[380px] bg-[#1e2238] text-white rounded-xl shadow-xl border border-[#3a3e55] p-4"
              style={{ zIndex: 999999 }}
            >
              {/* Team name */}
              <div className="text-base font-medium mb-3">tuanhung1995.aff's Team</div>
              <div className="border-b border-[#3b3f55] mb-3"></div>

              <div className="grid grid-cols-2 gap-8">
                {/* LEFT - ACCOUNT */}
                <AccountMenu />

                {/* RIGHT - EXPLORE */}
                <ExploreMenu />
              </div>

              {/* Working Status */}
              <WorkStatus />
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default NavbarUserMenu;
