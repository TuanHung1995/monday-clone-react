import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  collapsible?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, collapsible }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-md hover:bg-[#1b2648] cursor-pointer transition`}
      onClick={() => collapsible && setOpen(!open)}
    >
      <div className="flex items-center gap-2 text-sm">
        {icon}
        <span>{label}</span>
      </div>
      {collapsible && (
        <ChevronRight
          size={16}
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        />
      )}
    </div>
  );
};

export default NavItem;
