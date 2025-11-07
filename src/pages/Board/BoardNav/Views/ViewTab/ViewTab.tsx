import Box from "@mui/material/Box";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export interface View {
    id: number;
    name: string;
}

interface ViewTabProps {
    viewName?: string;
}

const ViewTab = ({ viewName }: ViewTabProps) => {
  return (
    <Box
      sx={{
        height: '42px',
        // width: 'fit-content',
        borderBottom: '2px solid #0073ea',
        display: 'flex',
        alignItems: 'center',
        px: '20px',
        py: '4px',
      }}
    >
      <Box
      // className="px-1 font-[14px] text-start"
       component="span"
       sx={{
        px: '4px',
        fontSize: '14px',
       }}
       >{viewName}
       </Box>
      <MoreHorizIcon sx={{ p: '3px' }} />
    </Box>
  );
};

export default ViewTab;
