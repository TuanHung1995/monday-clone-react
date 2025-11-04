import Box from "@mui/material/Box";

import { TOP_BOTTOM_COLUMN_COLOR } from "@utils/constants";

interface AddTaskRowProps {
  groupId: number;
}

const AddTaskRow = ({ groupId }: AddTaskRowProps) => {
  return (
    <Box sx={{ display: 'flex', borderTop: '1px solid #374151', bgcolor: TOP_BOTTOM_COLUMN_COLOR }}>
      <Box sx={{ p: 1, textAlign: 'center' }}>
        <input type="checkbox" />
      </Box>
      <Box sx={{ flex: 1 }}>
        <input
          type="text"
          placeholder="+ Add item"
          style={{
            backgroundColor: '#33354b',
            color: 'white',
            border: 'none',
            width: '100%',
            padding: '8px',
            outline: 'none',
          }}
        />
      </Box>
    </Box>
  );
};

export default AddTaskRow;
