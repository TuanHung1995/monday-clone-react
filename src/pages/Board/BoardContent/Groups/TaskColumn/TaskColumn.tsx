import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { ColValue } from "../TaskTable/TaskTable";

import { CircleUserRound, FileCheck2 } from "lucide-react";

// interface ColValue {
//     id: number;
//     columnId: Column;
//     color: string;
//     value: string;
// }

// interface Column {
//   id: number;
//   name: string;
//   type: string;
//   groupId: number;
//   colValues: Column[];
// }



// interface TaskColumnProps {
// interface TaskColumnProps {
//     col: ColValue;
// }

const TaskColumn = ({ col }: { col: ColValue }) => {
    const renderColumnValue = () => {

        switch (col.columnId.type) {
            case "status":
                return (
                    <Box sx={{ flex: 1, minWidth: 150, bgColor: col.color, textAlign: "center" }}>
                        <Typography variant="body2">{col.value}</Typography>
                    </Box>
                );
            case "date":
                return (
                    <Box sx={{ flex: 1, minWidth: 150, textAlign: "center" }}>
                        <Typography variant="body2">{col.value}</Typography>
                    </Box>
                );
            case "person":
                return (
                    <Box sx={{ flex: 1, minWidth: 150, textAlign: "center" }}>
                        <CircleUserRound className="w-6 h-6 mx-auto text-gray-400" />
                    </Box>
                );
            case "file":
                return (
                    <Box sx={{ flex: 1, minWidth: 150, textAlign: "center", cursor: "pointer" }}>
                        <FileCheck2 className="w-5 h-5 mx-auto text-gray-400" />
                    </Box>
                );
            case "text":
                return (
                    <Box sx={{ flex: 1, minWidth: 150 }}>
                        <Typography variant="body2">{col.value}</Typography>
                    </Box>
                );
            case "number":
                return (
                    <Box sx={{ flex: 1, minWidth: 150, textAlign: "center" }}>
                        <Typography variant="body2">{col.value}</Typography>
                    </Box>
                );
            default:
                return (
                    <Box sx={{ flex: 1, minWidth: 150 }}>
                        <Typography variant="body2">{col.value}</Typography>
                    </Box>
                );
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 150, height: 48, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Box key={col.id} sx={{ width: "auto", overflowX: "auto" }}>
                <Typography variant="h6">{col.columnId.name}</Typography>
            </Box> */}

            {/* Render column values here */}
            {renderColumnValue()}
        </Box>
    );
}

export default TaskColumn;
