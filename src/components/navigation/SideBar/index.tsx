import { Box } from "@mui/material";
import SidebarHeader from "./Header";
import SidebarSection from "./Sections";
import WorkspaceItem from "./WorkspaceItems";
import NavItem from "./NavItems";
import {
  Folder,
  Bug,
  LayoutDashboard,
  Users,
  Plus,
  Search,
  MoreHorizontal,
} from "lucide-react";

const Sidebar = () => {
  return (
    <Box
      className="flex flex-col h-full w-64 bg-[#121b33] text-gray-300 py-3 px-2"
      sx={{ borderRight: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}
    >
      {/* Header */}
      <SidebarHeader />

      {/* Favorites Section */}
      <SidebarSection title="Favorites" />

      {/* Workspaces */}
      <SidebarSection title="Workspaces">
        <div className="flex items-center justify-between px-2 py-1 mt-1">
          <WorkspaceItem name="Kanban Team" color="bg-pink-500" />
          <div className="flex gap-2">
            <Search size={16} className="cursor-pointer text-gray-400" />
            <MoreHorizontal size={16} className="cursor-pointer text-gray-400" />
            <Plus size={16} className="cursor-pointer text-gray-400" />
          </div>
        </div>

        {/* Boards */}
        <div className="ml-6 mt-2 flex flex-col gap-1">
          <NavItem icon={<LayoutDashboard size={16} />} label="Tasks" />
          <NavItem icon={<Folder size={16} />} label="Epics" />
          <NavItem icon={<Bug size={16} />} label="Bugs Queue" />
          <NavItem icon={<LayoutDashboard size={16} />} label="New Board" />
        </div>

        <div className="ml-4 mt-3">
          <NavItem icon={<Users size={16} />} label="My team" collapsible />
        </div>
      </SidebarSection>
    </Box>
  );
};

export default Sidebar;
