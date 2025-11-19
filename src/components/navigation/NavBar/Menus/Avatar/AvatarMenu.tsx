import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
import CustomTooltip from '@components/common/Tooltip/CustomTooltip';

const AvatarMenu = (
  { handleClick, open }: {
    handleClick: (event: React.MouseEvent<HTMLElement>) => void,
    open: boolean
  }) => {

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
          sx={{ width: 32, height: 32 }}
          alt="Avatar"
          src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/322451849_546725867349538_3870146970776579532_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHh9wuAAvGUZtjus__Dwwb8kSmiwTITY7ORKaLBMhNjs2AICmBScn3Gmz155MtAXvkY_4mlQ4DupRk5yNk5Vlka&_nc_ohc=IPX6n3myZuEAX96mwZw&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDDYqBxA-v3pz_VWDDJfk07T5Y4SlUAxZ_d2vnufnWmWg&oe=65804553'
        />
      </IconButton>
    </CustomTooltip>
  )

}

export default AvatarMenu;
