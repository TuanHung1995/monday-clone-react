import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

import { TOP_BOTTOM_COLUMN_COLOR, TASK_BORDER_COLOR_DARK } from "@utils/constants";
import { INDIGO } from "@utils/constants/colors/picker";

interface AddTaskRowProps {
  groupId: number;
}

const AddTaskRow = ({ groupId }: AddTaskRowProps) => {
  return (
    <Box sx={{ display: 'flex', height: '36px', borderLeft: `5px solid ${INDIGO}`, bgcolor: TOP_BOTTOM_COLUMN_COLOR }}>
      <Box sx={{ textAlign: "center", width: 48, height: 36, borderRight: `0.5px solid ${TASK_BORDER_COLOR_DARK}` }}>
        <Checkbox />
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundColor: TOP_BOTTOM_COLUMN_COLOR,
          width: '100%',
          borderTop: `0.5px solid ${TASK_BORDER_COLOR_DARK}`
        }}>
        <TextField
          variant="standard"
          placeholder="+ Add task"
          InputProps={{
            disableUnderline: true,
            sx: {
              px: "8px",
              mb: "8px",
              width: "100%",
              color: TOP_BOTTOM_COLUMN_COLOR,
              '& .MuiInputBase-input': {
                color: 'white',
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
    </Box>
  );
};

export default AddTaskRow;
