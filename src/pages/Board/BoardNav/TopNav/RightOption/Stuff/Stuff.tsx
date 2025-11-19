import Box from "@mui/material/Box";
import CustomTooltip from "@components/common/Tooltip/CustomTooltip";

import { Plug, Bot, Link2 } from "lucide-react";

const BoardRightNavStuff = () => {

    return (
        <Box
            className="flex items-center"
        >
            <CustomTooltip title="Integrate">
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
                        <Plug className="size-[14px] h-5 w-8" />
                        <Box sx={{ fontSize: '14px' }} component="span">Integrate</Box>
                    </Box>
                </Box>
            </CustomTooltip>

            <CustomTooltip title="Automate">
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
                        <Bot className="size-[14px] h-5 w-8" />
                        <Box sx={{ fontSize: '14px' }} component="span">Automate</Box>
                    </Box>
                </Box>
            </CustomTooltip>
        </Box>
    )

}

export default BoardRightNavStuff;
