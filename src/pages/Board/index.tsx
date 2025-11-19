import Box from "@mui/material/Box";
import NavbarHome from "@pages/Board/BoardNav";
import TaskGroups from "@pages/Board/BoardContent/Groups";
import { mockGroups, mockColumns } from "@api/mock-board-data-1.ts";

const BoardPage = () => {
  return (
      <Box>
        <NavbarHome />
        <TaskGroups initialGroups={mockGroups} initialColumns={mockColumns} />
      </Box>
  );
}

export default BoardPage;
