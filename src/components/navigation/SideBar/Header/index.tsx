import { Link } from "react-router";
import { Home, Grid } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="px-2 mb-3 rounded-[0.5rem]">
      <Link to="/home" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#1b2648] cursor-pointer">
        <Home size={18} />
        <span className="font-medium">Home</span>
      </Link>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#1b2648] cursor-pointer">
        <Grid size={18} />
        <span className="font-medium">Tools</span>
      </div>
    </div>
  );
};

export default SidebarHeader;
