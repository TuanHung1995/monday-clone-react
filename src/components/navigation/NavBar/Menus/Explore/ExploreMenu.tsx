import { User, FlaskConical, Sparkles, Users, Smartphone } from "lucide-react";
import MenuItem from '@components/common/Button/MenuItem';
import UpgradePlan from "./UpgradePlan/UpgradePlan";
import ChangeTheme from "./ChangeTheme/ChangeTheme";

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
            
            <ChangeTheme />

            {/* Upgrade */}
            <UpgradePlan />
        </div>
    )

}

export default ExploreMenu;
