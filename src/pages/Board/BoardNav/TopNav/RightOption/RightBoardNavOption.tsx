import Box from "@mui/material/Box";
import BoardRightNavStuff from "./Stuff/Stuff";
import InviteBoardNav from "./Invite/InviteBoardNav";

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const RightBoardNavOption = () => {
    return (
        <Box className="flex items-center space-x-2">
            <BoardRightNavStuff />
            <InviteBoardNav memberCount={5} />
            <MoreHorizOutlinedIcon className="cursor-pointer" />
        </Box>
    )
}

export default RightBoardNavOption;
