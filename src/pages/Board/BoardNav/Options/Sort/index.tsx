import Box from "@mui/material/Box";

import { ArrowUpDown } from "lucide-react";

const SortBoardOption = () => {

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
                <ArrowUpDown className="size-[14px] h-5 w-8" />
                <Box sx={{fontSize: '14px'}} component="span">Sort</Box>
            </Box>
        </Box>
    )

}

export default SortBoardOption;
