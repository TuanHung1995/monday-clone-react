import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import Box from "@mui/material/Box";

interface CollapseGroupProps {
    GroupTitleColor: string;
}

const CollapseGroup = ({ GroupTitleColor }: CollapseGroupProps) => {
    return (
        <Box
        sx={{
            pb: '10px'
        }}>
            <KeyboardArrowDownOutlinedIcon sx={{color: GroupTitleColor, fontSize: '16px', fontWeight: 500, height: '24px', width: '24px', ml: '4px' }} />
        </Box>
    )
}

export default CollapseGroup;
