import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface GroupTitleProps {
    groupName: string;
}

const GroupTitle = ({groupName}: GroupTitleProps) => {

    return (
        <Box sx={{ p: 2, bgcolor: "grey.800", borderBottom: "1px solid", borderColor: "grey.700" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "grey.200" }}>
                {groupName}
            </Typography>
        </Box>
    )

}

export default GroupTitle;
