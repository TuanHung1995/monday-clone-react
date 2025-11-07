import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const PersonBoardOption = () => {

    return (
        <Tooltip title="Filter board by person" arrow disableInteractive>
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
                    }
                }}
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
                    <AccountCircleOutlinedIcon className="size-[14px] h-5 w-8 pr-1" />
                    <Box sx={{ fontSize: '14px' }} component="span">Person</Box>
                </Box>
            </Box>
        </Tooltip>
    )

}

export default PersonBoardOption;
