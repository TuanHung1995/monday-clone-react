import Box from "@mui/material/Box";
import { Filter } from "lucide-react";

import FilterDropdown from "./Dropdown/FilterDropdown";

const BoardFilter = () => {
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
          }}
        >
            <Filter className="size-[14px] h-5 w-8" />
            <Box sx={{fontSize: '14px'}} component="span">Filter</Box>
            <FilterDropdown />
        </Box>
      </Box>
    )
}

export default BoardFilter;
