import Box from "@mui/material/Box";

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

      <SortBoardOption />

      <HideBoardOption />

      <GroupBy />
    </Box>
  )

}

export default BoardOptions;
