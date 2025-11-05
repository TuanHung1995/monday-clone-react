import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import type { ColValue } from "../TaskTable/TaskTable";

import { CircleUserRound, FileCheck2 } from "lucide-react";

import { TASK_ELEMENT_BG_COLOR_DARK } from "@utils/constants";

const TaskColumn = ({ col }: { col: ColValue }) => {

    // const {
    //     attributes,
    //     listeners,
    //     setNodeRef,
    //     transform,
    //     transition,
    // } = useSortable({ 
    //     id: col.id,
    //     data: { ...col }
    //  });

    // const dndKitColumnStyles = {
    //     transform: CSS.Transform.toString(transform),
    //     transition,
    // };

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
        <Box 
            // ref={setNodeRef}
            // style={dndKitColumnStyles}
            // {...attributes}
            // {...listeners}
            sx= {{ 
                display: 'flex', 
                flexDirection: 'column', 
                minWidth: 150, 
                height: 48, 
                alignItems: 'center', 
                justifyContent: 'center', 
                bgColor: TASK_ELEMENT_BG_COLOR_DARK, 
                borderRight: '1px solid #4b4e69' 
            }}
        >
            {/* Render column values here */}
            {renderColumnValue()}
        </Box>
    );
}

export default TaskColumn;
