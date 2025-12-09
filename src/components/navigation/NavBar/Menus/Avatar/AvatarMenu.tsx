import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CustomTooltip from '@components/common/Tooltip/CustomTooltip';
import { useAuthStore } from '@store/auth.store'; // Import store để lấy thông tin user

const AvatarMenu = (
  { handleClick, open }: {
    handleClick: (event: React.MouseEvent<HTMLElement>) => void,
    open: boolean
  }) => {

  // 1. Lấy thông tin user hiện tại từ Zustand Store
  const user = useAuthStore(state => state.user);

  // 2. Xử lý hiển thị: Ưu tiên Avatar URL -> Chữ cái đầu tên -> Mặc định 'U'
  const avatarUrl = user?.avatarUrl; 
  const displayName = user?.fullName || "User";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <CustomTooltip title="User Profile">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ padding: 0 }}
        aria-controls={open ? 'basic-menu-profiles' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar
          sx={{ 
            width: 32, 
            height: 32,
            bgcolor: "#0073ea", // Màu nền xanh Monday khi chưa có ảnh
            fontSize: "14px"
          }}
          alt={displayName}
          src={avatarUrl} // XÓA URL CỨNG CỦA FACEBOOK Ở ĐÂY
        >
          {/* Nếu không có ảnh, hiển thị ký tự đầu */}
          {!avatarUrl && initial}
        </Avatar>
      </IconButton>
    </CustomTooltip>
  )

}

export default AvatarMenu;
