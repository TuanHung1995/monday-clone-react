// src/components/BoardContent/TaskColumn.tsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Column } from "@apis/mock-board-data-1";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  TOP_BOTTOM_COLUMN_COLOR,
  TASK_BORDER_COLOR_DARK,
  GROUP_ELEMENT_HOVER_COLOR
} from "@utils/constants";

interface Props {
  column: Column;
  groupId?: string; // not used here but available
}

export default function TaskColumn({ column }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: { type: "COLUMN", column },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    minWidth: 150,
  } as React.CSSProperties;

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
      }}
      sx={{
        // width: "auto",
        minWidth: 150,
        overflowX: "auto",
        textAlign: "center",
        height: '36px',
        bgcolor: TOP_BOTTOM_COLUMN_COLOR,
        "&:hover": { backgroundColor: GROUP_ELEMENT_HOVER_COLOR },
        borderTop: `0.5px solid ${TASK_BORDER_COLOR_DARK}`,
        borderRight: `0.5px solid ${TASK_BORDER_COLOR_DARK}`
      }}
    >
      <Box
        sx={{
          padding: '6px',
          alignItems: 'center',
        }}
      >
        <TextField
          variant="standard"
          // placeholder="+ Add task"
          value={column.name}
          InputProps={{
            disableUnderline: true,
            sx: {
              p: '0 0 0 0',
              width: '100px', // 100% - 16px padding
              height: '16px',
              textAlign: 'center',
              alignItems: 'center',
              color: TOP_BOTTOM_COLUMN_COLOR,
              '& .MuiInputBase-input': {
                p: '0 0 0 0',
                textAlign: 'center',
                color: 'white',
                fontSize: '14px',
              },
              "&:focus-within": {
                borderRadius: "4px",
                border: "0.5px solid transparent",
                boxShadow: "0 0 0 2px #3b82f6",
              },
              "&:hover": {
                borderRadius: "4px",
                border: "0.5px solid transparent",
                boxShadow: "0 0 0 2px #3b82f6",
              },
            }
          }}
        />
      </Box>
    </Box>
  );
}
