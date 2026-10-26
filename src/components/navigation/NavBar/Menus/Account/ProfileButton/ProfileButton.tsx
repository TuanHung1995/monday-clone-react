import { User } from "lucide-react";
import MenuItem from '@components/common/Button/MenuItem';
import { useState } from "react";
import ProfileModal from "@components/common/Modal/Profile/ProfileModal";

const ProfileButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <MenuItem onClick={() => setOpen(true)} icon={<User size={18} />} label="My profile" />
            <ProfileModal open={open} onClose={() => setOpen(false)} />
        </>
    )

}

export default ProfileButton;
