import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "@apis/mock-board-data-1";
import Stack from "@mui/material/Stack";
import { CircleUserRound } from "lucide-react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  TASK_ELEMENT_BG_COLOR_DARK,
  TASK_BORDER_COLOR_DARK,
  GROUP_ELEMENT_HOVER_COLOR
} from "@utils/constants";

interface Props {
  task: Task;
  groupId: string;
}

export default function TaskRow({ task, groupId }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: "TASK", task, groupId },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  } as React.CSSProperties;

  return (
    <Stack
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style
      }}
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        // borderBottom: "1px solid",
        borderColor: "grey.700",
        bgcolor: TASK_ELEMENT_BG_COLOR_DARK,
        color: "grey.300",
        fontWeight: 500,
        // px: 1,
        // py: 0.5,
        "&:hover": { backgroundColor: "grey.900" },
      }}
    >
      <Box sx={{ minWidth: 150, 
        borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`, 
            borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`, }}>
        <Typography variant="body2">{task.name}</Typography>
      </Box>
      {task.values && Object.entries(task.values).map(([colId, val], idx) => {
        // For simplicity, assuming column type based on colId
        const columnType = colId === "col-1" ? "status" : colId === "col-2" ? "date" : colId === "col-3" ? "person" : "text";
        switch (columnType) {
          case "status":
            return (
              <Box key={idx} sx={{
                minWidth: 150, backgroundColor: val, textAlign: "center",
                borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`,
                borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`,
              }}>
                <Typography variant="body2">
                  {val}
                </Typography>
              </Box>
            );
          case "date":
            return (
              <Box key={idx} sx={{
                minWidth: 150,
                borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`,
                borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`,
              }}>
                <Typography variant="body2">
                  {val}
                </Typography>
              </Box>
            );
          case "person":
            return (
              <Box key={idx} sx={{
                flex: 1, minWidth: 150, textAlign: "center",
                borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`,
                borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`,
              }}>
                <CircleUserRound className="w-6 h-6 mx-auto text-gray-400" />
              </Box>
            );
          // case "file":
          //   return (
          //     <Box key={idx} sx={{ minWidth: 150, textAlign:, "center", cursor: "pointer"
          // borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`, 
          //     borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`, }}>
          //       {col.value && <FileCheck2 className="w-5 h-5 mx-auto text-gray-400" />}
          //     </Box>
          //   );
          case "text":
            return (
              <Box key={idx} sx={{
                minWidth: 150,
                borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`,
                borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`,
              }}>
                <Typography variant="body2">{val}</Typography>
              </Box>
            );
          // case "number":
          //   return (
          //     <Box key={idx} sx={{ minWidth: 150, textAlign:, "center"
          // borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`, 
          //     borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`, }}>
          //       <Typography variant="body2">{col.value}</Typography>
          //     </Box>
          //   );
          default:
            return (
              <Box key={idx} sx={{
                minWidth: 150,
                borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`,
                borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`,
              }}>
                <Typography variant="body2"></Typography>
              </Box>
            );
        }
      })}
    </Stack>
  );
}
