import { CircleUserRound, FileCheck2 } from "lucide-react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface TaskRowProps {
  task: {
    id: number;
    name: string;
    columnValues: { column: { id: number; type: string; name: string; columnId: number }; value: string; color?: string }[];
  };
}

const TaskRow = ({ task }: TaskRowProps) => {
  return (

    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        borderBottom: "1px solid",
          borderColor: "grey.700",
          color: "grey.300",
          fontWeight: 500,
          px: 1,
          py: 0.5,
        "&:hover": { backgroundColor: "grey.900" },
      }}
    >
      {/* <Box sx={{ width: 48, textAlign: "center" }}>
        <Checkbox size="small" />
      </Box> */}
      <Box sx={{ width: 300 }}>
        <Typography variant="body2">{task.name}</Typography>
      </Box>
      {task.columnValues.map((col, idx) => {
        switch (col.column.type) {
          case "status":
            return (
              <Box key={idx} sx={{ flex: 1, minWidth: 150, bgColor: col.color, textAlign: "center" }}>
                <Typography variant="body2">
                  {col.column.columnId === idx ? col.value : col.value}
                </Typography>
              </Box>
            );
          case "date":
            return (
              <Box key={idx} sx={{ flex: 1, minWidth: 150 }}>
                <Typography variant="body2">
                  {col.column.columnId === idx ? col.value : col.value}
                </Typography>
              </Box>
            );
          case "person":
            return (
              <Box key={idx} sx={{ flex: 1, minWidth: 150, textAlign: "center" }}>
                <CircleUserRound className="w-6 h-6 mx-auto text-gray-400" />
              </Box>
            );
          case "file":
            return (
              <Box key={idx} sx={{ flex: 1, minWidth: 150, textAlign: "center", cursor: "pointer" }}>
                {col.value && <FileCheck2 className="w-5 h-5 mx-auto text-gray-400" />}
              </Box>
            );
          case "text":
            return (
              <Box key={idx} sx={{ flex: 1, minWidth: 150 }}>
                <Typography variant="body2"></Typography>
              </Box>
            );
          case "number":
            return (
              <Box key={idx} sx={{ flex: 1, minWidth: 150, textAlign: "center" }}>
                <Typography variant="body2">{col.value}</Typography>
              </Box>
            );
          default:
            return (
              <Box key={idx} sx={{ flex: 1, minWidth: 150 }}>
                <Typography variant="body2"></Typography>
              </Box>
            );
        }
      })}
    </Stack>
  );
};

export default TaskRow;
