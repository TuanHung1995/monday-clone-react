import TaskTable from "./TaskTable/TaskTable";
import AddGroupButton from "../AddButton/AddGroupButton";
import Box from "@mui/material/Box";

import { BOARD_BG_COLOR_DARK } from "@utils/constants";

const BoardPage = () => {
  // Giả lập dữ liệu API từ backend Spring Boot
  const colValues = [
    { id: 1, columnId: { id: 1, name: "Task", type: "text", groupId: 1 }, value: "Task 1" },
    { id: 2, columnId: { id: 1, name: "Task", type: "text", groupId: 1 }, value: "Task 2" },
    { id: 3, columnId: { id: 1, name: "Task", type: "text", groupId: 1 }, value: "Task 3" },
    { id: 4, columnId: { id: 2, name: "Status", type: "status", groupId: 1 }, value: "In Progress", color: "#FFA500" },
    { id: 5, columnId: { id: 2, name: "Status", type: "status", groupId: 1 }, value: "Done", color: "#00FF00" },
    { id: 6, columnId: { id: 2, name: "Status", type: "status", groupId: 1 }, value: "Stuck", color: "#FF0000" },
    { id: 7, columnId: { id: 3, name: "Due Date", type: "date", groupId: 1 }, value: "2024-07-01" },
    { id: 8, columnId: { id: 3, name: "Due Date", type: "date", groupId: 1 }, value: "2024-07-05" },
    { id: 9, columnId: { id: 3, name: "Due Date", type: "date", groupId: 1 }, value: "2024-07-10" },
    { id: 10, columnId: { id: 4, name: "Task", type: "text", groupId: 1 }, value: "Task 4" },
    { id: 11, columnId: { id: 4, name: "Task", type: "text", groupId: 1 }, value: "Task 5" },
    { id: 12, columnId: { id: 4, name: "Task", type: "text", groupId: 1 }, value: "Task 6" },
    { id: 13, columnId: { id: 5, name: "Status", type: "status", groupId: 1 }, value: "In Progress", color: "#FFA500" },
    { id: 14, columnId: { id: 5, name: "Status", type: "status", groupId: 1 }, value: "Done", color: "#00FF00" },
    { id: 15, columnId: { id: 5, name: "Status", type: "status", groupId: 1 }, value: "Stuck", color: "#FF0000" },
    { id: 16, columnId: { id: 6, name: "Due Date", type: "date", groupId: 1 }, value: "2024-07-01" },
    { id: 17, columnId: { id: 6, name: "Due Date", type: "date", groupId: 1 }, value: "2024-07-05" },
    { id: 18, columnId: { id: 6, name: "Due Date", type: "date", groupId: 1 }, value: "2024-07-10" },
  ]

  const groups = [
    {
      id: 1,
      name: "Team Tasks",

      columns: [
        { id: 1, groupId: 1, name: "Task", type: 'text', colValues: colValues.filter(cv => cv.columnId.id === 1) },
        { id: 2, groupId: 1, name: "Status", type: 'status', colValues: colValues.filter(cv => cv.columnId.id === 2) },
        { id: 3, groupId: 1, name: "Due Date", type: 'date', colValues: colValues.filter(cv => cv.columnId.id === 3) },
      ],
    },
    {
      id: 2,
      name: "Personal Tasks",
      columns: [
        { id: 4, groupId: 2, name: "Task", type: 'text', colValues: colValues.filter(cv => cv.columnId.id === 4) },
        { id: 5, groupId: 2, name: "Status", type: 'status', colValues: colValues.filter(cv => cv.columnId.id === 5) },
        { id: 6, groupId: 2, name: "Due Date", type: 'date', colValues: colValues.filter(cv => cv.columnId.id === 6) },
      ],
    },
  ];

  const rows = 4; // Số lượng hàng giả lập

  return (
    <Box sx={{ p: 2, bgcolor: BOARD_BG_COLOR_DARK }}>
      {groups.map((group) => (
        <TaskTable key={group.id} group={group} {...(group as unknown as any)} rows={rows} />
      ))}

      <AddGroupButton />
    </Box>
  );
};

export default BoardPage;
