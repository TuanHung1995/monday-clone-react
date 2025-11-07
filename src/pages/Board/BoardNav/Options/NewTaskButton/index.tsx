import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

import AddTaskDropdown from "./Dropdown/AddTaskDropdown";

import { ADD_TASK_BUTTON_BG_COLOR_DARK } from "@utils/constants";

const NewTaskButton = () => {

    return (
        <Tooltip title="Create a new task" arrow disableInteractive>
            <Box
                sx={{
                    height: '32px',
                    alignItems: 'center',
                    mr: '6px',
                    py: '1.5px',
                    backgroundColor: ADD_TASK_BUTTON_BG_COLOR_DARK,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    ":hover": {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                    }
                }}
            >
                <Box
                    sx={{
                        width: 'fit-content',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ padding: '4px 8px', fontSize: '14px' }} component="span">New Task</Box>
                    <AddTaskDropdown />
                </Box>
            </Box>
        </Tooltip>
    )
}

export default NewTaskButton;
