import React from "react";
import { Button, Avatar, Tooltip, IconButton } from "@mui/material";
import { 
    Plus,
    ChevronDown, 
    Search,
    Filter, 
    SortAsc, 
    EyeOff, 
    Group, 
    MoreHorizontal, 
    Home, 
    Users, 
    Link2, 
    MessageSquare, 
    Zap, 
    Workflow 
} from "lucide-react";

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
    <div
      className="backdrop-blur-md bg-[#1c1f26]/90 border-b border-gray-800 text-gray-200"
    >
      {/* Top row */}
      <div className="flex justify-between items-center px-4 py-2">
        {/* Board title */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg">{boardName}</span>
          <ChevronDown className="text-gray-400" size={18} />
          {/* <span className="text-gray-400">▾</span> */}
        </div>

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

      {/* Second row */}
      <div className="flex items-center space-x-3 px-4 pb-2 border-t border-gray-800 mt-1">
        <Button
          size="small"
          variant="contained"
          startIcon={<Plus size={16} />}
          className="!bg-blue-600 !text-white normal-case"
        >
          New Item
        </Button>

        <Button
          size="small"
          variant="text"
          startIcon={<Search size={16} />}
          className="!text-gray-300 hover:!bg-gray-700 normal-case"
        >
          Search
        </Button>

        <Button
          size="small"
          variant="text"
          startIcon={<Filter size={16} />}
          className="!text-gray-300 hover:!bg-gray-700 normal-case"
        >
          Filter
        </Button>

        <Tooltip title="Sort board by any column">
          <Button
            size="small"
            variant="text"
            startIcon={<SortAsc size={16} />}
            className="!text-gray-300 hover:!bg-gray-700 normal-case"
          >
            Sort
          </Button>
        </Tooltip>

        <Button
          size="small"
          variant="text"
          startIcon={<EyeOff size={16} />}
          className="!text-gray-300 hover:!bg-gray-700 normal-case"
        >
          Hide
        </Button>

        <Button
          size="small"
          variant="text"
          startIcon={<Group size={16} />}
          className="!text-gray-300 hover:!bg-gray-700 normal-case"
        >
          Group by
        </Button>
      </div>
    </div>
  );
};

export default BoardNavbar;
