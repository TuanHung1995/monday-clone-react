import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { Plus, Search, SortAsc, EyeOff, Group } from "lucide-react";

import NewTaskButton from "./NewTaskButton";
import SearchBoardOption from "./Search";
import PersonBoardOption from "./Person";
import BoardFilter from "./Filter";
import SortBoardOption from "./Sort";
import HideBoardOption from "./Hide";
import GroupBy from "./GroupBy";


const BoardOptions = () => {

    return (
        <Box 
            sx={{
              height: '64px',
                py: '16px'
            }}
            className="flex items-center mt-1">
        <NewTaskButton />

        <SearchBoardOption />

        <PersonBoardOption />

        <BoardFilter />

        <Tooltip title="Sort board by any column">
          <SortBoardOption />
        </Tooltip>


        <HideBoardOption />

        <GroupBy />
      </Box>
    )

}

export default BoardOptions;
