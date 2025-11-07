import Box from "@mui/material/Box";
import { Link2 } from "lucide-react";


interface InviteBoardNavProps {
    memberCount?: number;
}
const InviteBoardNav = ({ memberCount }: InviteBoardNavProps) => {

    return (
          <Box
            sx={{
                height: '32px',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
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
                }}
            >
                <Box sx={{ padding: '4px 8px', fontSize: '14px' }} component="span">Invite/{memberCount}</Box>
                <Box sx={{p: "4px 4px", borderLeft: '1px solid rgba(255, 255, 255, 0.2)'}}>
                    <Link2 />
                </Box>
            </Box>
        </Box>
    )

}

export default InviteBoardNav;
