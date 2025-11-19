import { User, Upload, Trash2, Archive, Settings, LogOut, FlaskConical, Sparkles, Users } from "lucide-react";
import MenuItem from '@components/common/Button/MenuItem';

const AccountMenu = () => {

    return (
        <div>
            <div className="uppercase text-xs text-gray-400 tracking-wide mb-2">
                Account
            </div>

            <MenuItem icon={<User size={18} />} label="My profile" />
            <MenuItem icon={<Upload size={18} />} label="Import data" />
            <MenuItem icon={<Sparkles size={18} />} label="Automations" />
            <MenuItem icon={<FlaskConical size={18} />} label="Developers" />
            <MenuItem icon={<Trash2 size={18} />} label="Trash" />
            <MenuItem icon={<Archive size={18} />} label="Archive" />
            <MenuItem icon={<Settings size={18} />} label="Administration" />
            <MenuItem icon={<Users size={18} />} label="Teams" />
            <MenuItem icon={<LogOut size={18} />} label="Log out" />
        </div>
    )

}

export default AccountMenu;
