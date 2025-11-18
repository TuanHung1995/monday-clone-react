import { User, FlaskConical, Sparkles, Users, Smartphone, Palette, ChevronRight } from "lucide-react";
import Button from '@mui/material/Button';
import MenuItem from '@components/common/Button/MenuItem';

const ExploreMenu = () => {

    return (
        <div>
            <div className="uppercase text-xs text-gray-400 tracking-wide mb-2">
                Explore
            </div>

            <MenuItem icon={<Sparkles size={18} />} label="App marketplace" />
            <MenuItem icon={<Smartphone size={18} />} label="Mobile app" />
            <MenuItem icon={<FlaskConical size={18} />} label="monday.labs" />
            <MenuItem icon={<Sparkles size={18} />} label="Shortcuts" />

            <div className="border-b border-[#3b3f55] my-3"></div>

            <MenuItem icon={<Users size={18} />} label="Invite members" />
            <MenuItem icon={<User size={18} />} label="Get help" />
            <MenuItem
                icon={<Palette size={18} />}
                label="Change theme"
                right={<ChevronRight size={16} />}
            />

            {/* Upgrade */}
            <Button
                variant="contained"
                fullWidth
                sx={{
                    backgroundColor: "#28a745",
                    marginTop: "16px",
                    paddingY: "6px",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#23963d" },
                }}
            >
                Upgrade
            </Button>
        </div>
    )

}

export default ExploreMenu;
