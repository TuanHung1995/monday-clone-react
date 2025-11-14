import NavbarHome from "@pages/Board/BoardNav";
import TaskGroups from "@pages/Board/BoardContent/Groups";
import { mockGroups, mockColumns } from "@api/mock-board-data-1.ts";

const BoardPage = () => {
  return (
    <div>
      <NavbarHome />
      <TaskGroups initialGroups={mockGroups} initialColumns={mockColumns} />
    </div>
  );
}

export default BoardPage;
