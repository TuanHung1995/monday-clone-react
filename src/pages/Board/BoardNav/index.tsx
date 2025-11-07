import React from "react";

import BoardViews from "./Views";
import BoardOptions from "./Options";
import RightBoardNavOption from "./TopNav/RightOption/RightBoardNavOption";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { 
    Plus,
    ChevronDown, 
    Search,
    Filter, 
    SortAsc, 
    EyeOff, 
    Group, 
    MoreHorizontal, 
    Users, 
    MessageSquare, 
    Zap, 
    Workflow 
} from "lucide-react";

import { BOARD_BG_COLOR_DARK } from "@utils/constants";

interface BoardNavbarProps {
  boardName?: string;
  userInitials?: string;
  userName?: string;
}

const BoardNavbar: React.FC<BoardNavbarProps> = ({
  boardName = "Main Table",
  userInitials = "HT",
  userName = "Person",
}) => {
  return (
    <Box
      sx={{
        backgroundColor: BOARD_BG_COLOR_DARK,
        pl: "38px",
        pr: "30px",
        pt: "18px",
        zIndex: 10,
        position: 'sticky',

      }}
      className="backdrop-blur-md text-gray-200"
    >
      {/* Top row */}
      <Box className="flex justify-between items-center">
        {/* Board title */}
        <Box
        sx={{
          px: "1px",
          py: "4px",
        }}
          className="flex items-center space-x-2">
          <Typography 
            variant="h2"
            sx={{
              fontWeight: 500,
            }}
          >
            {boardName}
          </Typography>
          <ChevronDown className="text-gray-400" size={18} />
          {/* <span className="text-gray-400">▾</span> */}
        </Box>

        {/* Right controls */}
        <RightBoardNavOption />
      </Box>

      <BoardViews />

      {/* Second row */}
      <BoardOptions />
    </Box>
  );
};

export default BoardNavbar;
