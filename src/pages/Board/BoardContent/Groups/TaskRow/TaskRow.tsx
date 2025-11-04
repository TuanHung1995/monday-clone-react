import React from "react";
import { MessageCirclePlus, CircleUserRound, FileCheck2 } from "lucide-react";
import { Box, Checkbox, Typography, Stack } from "@mui/material";

interface TaskRowProps {
  task: {
    id: number;
    name: string;
    columnValues: { column: { id: number; type: string; name: string; columnId: number }; value: string; color?: string }[];
  };
}

const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
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
    // <tr className="hover:bg-[#2a2d4a] transition-colors">
    //   <td className="p-1 text-center">
    //     <input type="checkbox" />
    //   </td>

    //   <td className="p-1">
    //     <div className="flex justify-between items-center border border-gray-600 rounded-md p-2 text-gray-300">
    //       <span>{task.name}</span>
    //       <button className="text-gray-400 hover:text-sky-400">
    //         <MessageCirclePlus className="w-5 h-5" />
    //       </button>
    //     </div>
    //   </td>

    //   {task.columnValues.map((col, idx) => {
    //     switch (col.column.type) {
    //       case "status":
    //         return (
    //           <td key={idx} className="p-1 text-center" style={{ backgroundColor: col.color }}>
    //             {col.value}
    //           </td>
    //         );
    //       case "date":
    //         return (
    //           <td key={idx} className="p-1 text-center">
    //             <input
    //               type="text"
    //               className="text-gray-300 text-sm bg-[#30324e] border border-[#30324e] text-center w-full"
    //               value={col.value}
    //               readOnly
    //             />
    //           </td>
    //         );
    //       case "person":
    //         return (
    //           <td key={idx} className="p-1 text-center">
    //             <CircleUserRound className="w-6 h-6 mx-auto text-gray-400" />
    //           </td>
    //         );
    //       case "file":
    //         return (
    //           <td key={idx} className="p-1 text-center cursor-pointer">
    //             {col.value && <FileCheck2 className="w-5 h-5 mx-auto text-gray-400" />}
    //           </td>
    //         );
    //       case "text":
    //         return <td key={idx} className="p-1 text-center text-gray-300"></td>;
    //       case "number":
    //         return <td key={idx} className="p-1 text-center">{col.value}</td>;
    //       default:
    //         return <td key={idx}></td>;
    //     }
    //   })}
    // </tr>
  );
};

export default TaskRow;
