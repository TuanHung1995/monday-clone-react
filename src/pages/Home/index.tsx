import HomeHeader from "./HomeHeader";
import RecentViewed from "./RecentViewed";

import { Box } from "@mui/material";

import { NAV_BAR_HEIGHT } from "@utils/constants";

const HomePage = () => {
  return (
    <Box className="w-full bg-[#181b34] overflow-auto text-white"
      sx={{ height: `calc(100vh - ${NAV_BAR_HEIGHT}px)` }}
    >
      <HomeHeader username="TUAN HUNG" />

      <div className="h-auto p-5">
        <RecentViewed />

        {/* Link to board page */}
        <div className="mt-4">
          <a
            href="/board"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Go to Board
          </a>
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
