import { Box, Checkbox } from "@mui/material";
import { BRIGHT_BLUE } from "@utils/constants/colors/picker";
import { TASK_BORDER_COLOR_DARK } from "@utils/constants";

const ColCheckbox = () => {
    return (
        <Box 
          sx={{ 
            textAlign: "center", 
            width: 48, 
            height: 36, 
            // borderLeft: `5px solid ${BRIGHT_BLUE}`, 
            borderTop: `1px solid ${TASK_BORDER_COLOR_DARK}`, 
            borderRight: `1px solid ${TASK_BORDER_COLOR_DARK}`, 
            borderBottom: `1px solid ${TASK_BORDER_COLOR_DARK}` }}>
          <Checkbox className="h-9 w-9"/>
        </Box>
    )
}

export default ColCheckbox;
