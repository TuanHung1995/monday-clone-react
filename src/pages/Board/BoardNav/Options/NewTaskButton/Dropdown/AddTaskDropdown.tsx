import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BOARD_BG_COLOR_DARK } from '@utils/constants';

const AddTaskDropdown = () => {
    return (
        <KeyboardArrowDownIcon sx={{ fontSize: '14px', height: '24px', width: '24px', ml: '4px', borderLeft: '1px solid', borderLeftColor: BOARD_BG_COLOR_DARK }} />
    )
}

export default AddTaskDropdown;
