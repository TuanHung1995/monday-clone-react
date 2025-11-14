import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CollapseGroup from "./CollapseGroup/CollapseGroup";

interface GroupTitleProps {
    groupName: string;
    GroupTitleColor: string;
}

const GroupTitle = ({ groupName, GroupTitleColor }: GroupTitleProps) => {

    return (
        <Box
            sx={{
                display: 'flex',
                height: '40px',
                alignItems: 'center',
                px: '8px',
            }}
        >
            <CollapseGroup GroupTitleColor={GroupTitleColor} />
            <TextField
                variant="standard"
                value={groupName}
                InputProps={{
                    disableUnderline: true,
                    sx: {
                        px: "8px",
                        mb: "8px",
                        width: "100%",
                        color: GroupTitleColor,
                        '& .MuiInputBase-input': {
                            color: GroupTitleColor,
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
    )

}

export default GroupTitle;
