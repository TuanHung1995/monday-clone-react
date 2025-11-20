import React from "react";
import Box from "@mui/material/Box";
import { Plus } from "lucide-react";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Group, Column } from "@apis/mock-board-data-1";
import TaskColumn from "../TaskColumn/TaskColumn";
import TaskRow from "../TaskRow/TaskRow";
import TextField from "@mui/material/TextField";
import CollapseGroup from "../GroupTitle/CollapseGroup/CollapseGroup";
import AddTaskRow from "../../AddButton/AddTaskRow";
import {
  TASK_ELEMENT_BG_COLOR_DARK,
} from "@utils/constants";

interface Props {
  group: Group;
  columns: Column[];
}

export default function TaskTable({ group, columns }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: group.id,
    data: { type: "GROUP", group },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: 20,
  } as React.CSSProperties;

  const GroupTitleColor = '#FFFFFF';

  return (
    <Box
      ref={setNodeRef}
      style={style}
      sx={{
        width: "fit-content",
        mb: 4,
        p: 2,
        pb: 0
      }}
    >
      {/* header (draggable via attributes/listeners) */}
      <Box
        {...attributes}
        {...listeners}
        sx={{
          display: 'flex',
          height: '40px',
          alignItems: 'center',
          px: '8px',
          cursor: 'grab',
        }}
      >
        {/* {group.title} */}
        <CollapseGroup GroupTitleColor={GroupTitleColor} />
        <TextField
          variant="standard"
          value={group.title}
          InputProps={{
            disableUnderline: true,
            sx: {
              px: "8px",
              mb: "8px",
              width: "100%",
              color: GroupTitleColor,
              '& .MuiInputBase-input': {
                color: GroupTitleColor,
                fontSize: '16px',
              },
              "&:focus-within": {
                borderRadius: "4px",
                border: "1px solid transparent",
                boxShadow: "0 0 0 2px #3b82f6",
              },
              "&:hover": {
                borderRadius: "4px",
                border: "1px solid transparent",
                boxShadow: "0 0 0 2px #3b82f6",
              },
            }
          }}
        />
      </Box>

      <Box
        sx={{
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Columns (global columns list shown as column headers) */}
        <SortableContext items={columns.map((c) => c.id)} strategy={verticalListSortingStrategy}>
          <Box sx={{ display: 'flex', bgcolor: TASK_ELEMENT_BG_COLOR_DARK }}>
            {columns.map((col) => (
              <TaskColumn key={col.id} column={col} groupId={group.id} />
            ))}
            <Box 
              sx={{
                width: 40,
                color: "grey.400",
                cursor: "pointer",
                bgcolor: TASK_ELEMENT_BG_COLOR_DARK,
              }}
            >
              <Plus />
            </Box>
          </Box>
        </SortableContext>

        {/* Tasks */}
        <SortableContext items={group.tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <div style={{}}>
            {group.tasks.map((task) => (
              <TaskRow key={task.id} task={task} groupId={group.id} />
            ))}
          </div>
        </SortableContext>

        {/* Add Task Row */}
        <Box
          sx={{
            px: 0,
            py: 0,
            color: "grey.400",
            cursor: "pointer",
            "&:hover": { color: "primary.main" },
          }}
        >
          <AddTaskRow groupId={group.id} />
        </Box>
      </Box>

    </Box>
  );
}
