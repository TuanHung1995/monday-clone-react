import TaskTable from "./TaskTable/TaskTable";
import AddGroupButton from "../AddButton/AddGroupButton";
import Box from "@mui/material/Box";

import type { Column, Group, ColValue } from "./TaskTable/TaskTable";

import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import { BOARD_BG_COLOR_DARK } from "@utils/constants";
import { mapOrder } from "@utils/helpers";

import { useState, useEffect } from "react";

const BoardPage = () => {
  // Giả lập dữ liệu API từ backend Spring Boot
  const colValues: ColValue[] = [
    { 
      id: 1, 
      columnId: { 
        id: 1, 
        name: "Task", 
        type: "text", 
        groupId: {
          id: 1,
          name: "Team Tasks"
        }
      },
      value: "Task 1",
      color: "#FFFFFF"
    },
    { id: 2, columnId: { id: 1, name: "Task", type: "text", groupId: { id: 1, name: "Team Tasks" } }, value: "Task 2", color: "#FFFFFF" },
    { id: 3, columnId: { id: 1, name: "Task", type: "text", groupId: { id: 1, name: "Team Tasks" } }, value: "Task 3", color: "#FFFFFF" },
    { id: 4, columnId: { id: 2, name: "Status", type: "status", groupId: { id: 1, name: "Team Tasks" } }, value: "In Progress", color: "#FFA500" },
    { id: 5, columnId: { id: 2, name: "Status", type: "status", groupId: { id: 1, name: "Team Tasks" } }, value: "Done", color: "#00FF00" },
    { id: 6, columnId: { id: 2, name: "Status", type: "status", groupId: { id: 1, name: "Team Tasks" } }, value: "Stuck", color: "#FF0000" },
    { id: 7, columnId: { id: 3, name: "Due Date", type: "date", groupId: { id: 1, name: "Team Tasks" } }, value: "2024-07-01", color: "#FFFFFF" },
    { id: 8, columnId: { id: 3, name: "Due Date", type: "date", groupId: { id: 1, name: "Team Tasks" } }, value: "2024-07-05", color: "#FFFFFF" },
    { id: 9, columnId: { id: 3, name: "Due Date", type: "date", groupId: { id: 1, name: "Team Tasks" } }, value: "2024-07-10", color: "#FFFFFF" },
    { id: 10, columnId: { id: 4, name: "Task", type: "text", groupId: { id: 2, name: "Personal Tasks" } }, value: "Task 4", color: "#FFFFFF" },
    { id: 11, columnId: { id: 4, name: "Task", type: "text", groupId: { id: 2, name: "Personal Tasks" } }, value: "Task 5", color: "#FFFFFF" },
    { id: 12, columnId: { id: 4, name: "Task", type: "text", groupId: { id: 2, name: "Personal Tasks" } }, value: "Task 6", color: "#FFFFFF" },
    { id: 13, columnId: { id: 5, name: "Status", type: "status", groupId: { id: 2, name: "Personal Tasks" } }, value: "In Progress", color: "#FFA500" },
    { id: 14, columnId: { id: 5, name: "Status", type: "status", groupId: { id: 2, name: "Personal Tasks" } }, value: "Done", color: "#00FF00" },
    { id: 15, columnId: { id: 5, name: "Status", type: "status", groupId: { id: 2, name: "Personal Tasks" } }, value: "Stuck", color: "#FF0000" },
    { id: 16, columnId: { id: 6, name: "Due Date", type: "date", groupId: { id: 2, name: "Personal Tasks" } }, value: "2024-07-01", color: "#FFFFFF" },
    { id: 17, columnId: { id: 6, name: "Due Date", type: "date", groupId: { id: 2, name: "Personal Tasks" } }, value: "2024-07-05", color: "#FFFFFF" },
    { id: 18, columnId: { id: 6, name: "Due Date", type: "date", groupId: { id: 2, name: "Personal Tasks" } }, value: "2024-07-10", color: "#FFFFFF" },
  ]

  const columns: Column[] = [
    { id: 1, groupId: { id: 1, name: "Team Tasks" }, name: "Task", type: 'text' },
    { id: 2, groupId: { id: 1, name: "Team Tasks" }, name: "Status", type: 'status' },
    { id: 3, groupId: { id: 1, name: "Team Tasks" }, name: "Due Date", type: 'date' },
    { id: 4, groupId: { id: 2, name: "Personal Tasks" }, name: "Task", type: 'text' },
    { id: 5, groupId: { id: 2, name: "Personal Tasks" }, name: "Status", type: 'status' },
    { id: 6, groupId: { id: 2, name: "Personal Tasks" }, name: "Due Date", type: 'date' },
  ]

  const groups: Group[] = [
    {
      id: 1,
      name: "Team Tasks"
    },
    {
      id: 2,
      name: "Personal Tasks"
    },
  ];

  const colValuesPerGroup = (groupId: number) => {
    return colValues.filter(colValue => colValue.columnId.groupId.id === groupId);
  }

  const columnsPerGroup = (groupId: number) => {
    return columns.filter(column => column.groupId.id === groupId);
  }

  const rows = 4; // Số lượng hàng giả lập

  // const [orderedGroupsState, setOrderedGroupsState] = useState([]);

  // useEffect(() => {
  //   const orderedGroups = mapOrder(groups, [2, 1], 'id');
  //   setOrderedGroupsState(orderedGroups);
  // }, []);

  const handleDragEnd = (event: any) => {
    console.log('Drag ended', event);
  }

  return (
    <Box sx={{ p: 2, bgcolor: BOARD_BG_COLOR_DARK }}>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={groups.map(group => group.id)} strategy={verticalListSortingStrategy}>
          {groups.map((group) => (
            <TaskTable key={group.id} group={group} columns={columnsPerGroup(group.id)} colValues={colValuesPerGroup(group.id)} rows={rows} />
          ))}
        </SortableContext>
      </DndContext>
      <AddGroupButton />
    </Box>
  );
};

export default BoardPage;
