import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Table2 } from "lucide-react";

const GroupBy = () => {
    return (
        <Box 
        sx={{
            height: '32px', 
            alignItems: 'center', 
            mr: '6px',
            py: '5.5px', 
            cursor: 'pointer',
            ":hover": {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
        }}}
        >
            <Box
            sx={{
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                mr: '6px',
                pr: '12px',
            }}
            >
                <Table2 className="size-[14px] h-5 w-8" />
                <Box sx={{fontSize: '14px'}} component="span">Group by</Box>
            </Box>
        </Box>
    );
};

export default GroupBy;
