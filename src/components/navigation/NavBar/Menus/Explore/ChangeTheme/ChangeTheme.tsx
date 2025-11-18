import { Palette, ChevronRight } from "lucide-react";
import MenuItem from '@components/common/Button/MenuItem';

const ChangeTheme = () => {

    return (
        <MenuItem
            icon={<Palette size={18} />}
            label="Change theme"
            right={<ChevronRight size={16} />}
        />
    )

}

export default ChangeTheme;
