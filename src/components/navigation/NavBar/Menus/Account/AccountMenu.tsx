import { User, Upload, Trash2, Archive, Settings, LogOut, FlaskConical, Sparkles, Users } from "lucide-react";

const MenuItem = ({
    icon,
    label,
    right,
}: {
    icon: React.ReactNode;
    label: string;
    right?: React.ReactNode;
}) => {
    return (
        <div className="flex items-center justify-between py-1.5 cursor-pointer hover:bg-[#2a304a] rounded-md px-2 transition">
            <div className="flex items-center gap-2">
                <span className="text-gray-300">{icon}</span>
                <span className="text-sm">{label}</span>
            </div>
            {right && <div className="text-gray-400">{right}</div>}
        </div>
    );
};

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
