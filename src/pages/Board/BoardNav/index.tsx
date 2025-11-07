import React from "react";

import BoardViews from "./Views";
import BoardOptions from "./Options";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
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
      <div className="flex justify-between items-center">
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
        <div className="flex items-center space-x-2">
          <Tooltip title="Integrate">
            <Button
              startIcon={<Workflow size={16} />}
              size="small"
              variant="text"
              className="!text-gray-300 hover:!bg-gray-700"
            >
              Integrate
            </Button>
          </Tooltip>

          <Tooltip title="Automate">
            <Button
              startIcon={<Zap size={16} />}
              size="small"
              variant="text"
              className="!text-gray-300 hover:!bg-gray-700"
            >
              Automate
            </Button>
          </Tooltip>

          <Tooltip title="Inbox">
            <IconButton size="small" className="text-gray-300 hover:bg-gray-700">
              <MessageSquare size={18} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Invite team">
            <Button
              size="small"
              variant="outlined"
              startIcon={<Users size={16} />}
              className="!border-gray-600 !text-gray-300 hover:!bg-gray-700"
            >
              Invite
            </Button>
          </Tooltip>

          <Avatar sx={{ bgcolor: "#ec4899", width: 32, height: 32 }}>
            {userInitials}
          </Avatar>

          <IconButton size="small" className="hover:bg-gray-700 text-gray-300">
            <MoreHorizontal size={18} />
          </IconButton>
        </div>
      </div>

      <BoardViews />

      {/* Second row */}
      <BoardOptions />
    </Box>
  );
};

export default BoardNavbar;
