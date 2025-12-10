import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // MUI v6 usage, check your version if Grid2
import Divider from "@mui/material/Divider";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Smartphone, 
  Gift, 
  CalendarDays, 
  User, 
  BriefcaseBusiness, 
  Bell, 
  Globe, 
  Lock, 
  ListIndentIncrease 
} from "lucide-react";

import { SidebarItem } from "./components/SidebarItem";
import { InfoRow } from "./components/InfoRow";
import { DetailCard } from "./components/DetailCard";
import { userApi } from "@apis/user/userApi";
import type { UserProfile } from "../../../../types/auth";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ProfileModal: React.FC<Props> = ({ open, onClose }) => {
  const [profile, setProfile] = useState<UserProfile>();
  const [loading, setLoading] = useState(false);

  // Fetch data khi mở modal
  useEffect(() => {
    if (open) {
      setLoading(true);
      userApi.getMe()
        .then((data) => setProfile(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [open]);

  // Lấy chữ cái đầu làm Avatar
  const avatarInitial = profile?.fullName ? profile.fullName.charAt(0).toUpperCase() : "?";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          backgroundColor: "#181b34", // Màu nền chính (khớp với RecentViewed)
          color: "#dcdfe4",
          borderRadius: "12px",
          height: "85vh", // Chiều cao cố định cho giống app thật
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        },
      }}
    >
      {/* Header Title Mobile Only (Optional) - Desktop design implies Sidebar Header */}
      
      <div className="flex h-full">
        
        {/* --- LEFT SIDEBAR --- */}
        <div className="w-64 bg-[#202336] flex-shrink-0 flex flex-col border-r border-[#2f324e]">
          <div className="p-6 text-xl font-semibold text-white">Profile</div>
          
          <div className="flex-1 overflow-y-auto">
            <SidebarItem icon={<User size={18} />} label="Personal info" active />
            <SidebarItem icon={<BriefcaseBusiness size={18} />} label="Working status" />
            <SidebarItem icon={<Bell size={18} />} label="Notifications" />
            <SidebarItem icon={<Globe size={18} />} label="Language & region" />
            <SidebarItem icon={<Lock size={18} />} label="Password" />
            <SidebarItem icon={<ListIndentIncrease size={18} />} label="Session history" />
          </div>
        </div>

        {/* --- RIGHT CONTENT --- */}
        <div className="flex-1 flex flex-col bg-[#181b34] relative overflow-y-auto custom-scrollbar">
          
          {/* Close Button Absolute */}
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 16, top: 16, color: "gray" }}
          >
            <CloseIcon />
          </IconButton>

          {loading ? (
             <Box className="flex h-full items-center justify-center text-gray-400">Loading profile...</Box>
          ) : (
            <Box className="p-8">
              
              {/* TOP SECTION: INFO HEADER */}
              <div className="flex flex-col md:flex-row gap-8 mb-6 border border-[#2f324e] rounded-xl p-6 bg-[#1f2235] shadow-sm">
                
                {/* Avatar & Name */}
                <div className="flex flex-col items-center md:items-start min-w-[200px]">
                  <Avatar 
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      bgcolor: "#5960e6", // Màu tím xanh đặc trưng Monday
                      fontSize: "3rem",
                      fontWeight: 400,
                      mb: 2
                    }}
                  >
                    {avatarInitial}
                  </Avatar>
                  
                  <div className="text-center md:text-left">
                    <Typography variant="h4" sx={{ fontWeight: 600, color: "white", fontSize: "1.75rem" }}>
                      {profile?.fullName}
                    </Typography>
                    
                    <div className="mt-2 text-gray-400 hover:text-white cursor-pointer text-sm transition-colors">
                      {profile?.jobTitle || "Add a job title"}
                    </div>

                    {/* Badge (Giả lập vì backend chưa trả role, hoặc logic check user) */}
                    <div className="mt-3 inline-block bg-[#282c42] text-[#9ba3b7] text-xs font-semibold px-2 py-1 rounded border border-[#3b3f53]">
                      Admin
                    </div>

                    <div className="mt-6">
                        <div className="text-xs text-gray-400 mb-2 font-medium">Your work schedules:</div>
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-[#3b3f53] rounded text-sm text-gray-300 hover:bg-[#2b2f44] transition-colors">
                            <CalendarDays size={14} className="text-[#0073ea]" />
                            Account schedule
                        </button>
                    </div>
                  </div>
                </div>

                <Divider orientation="vertical" flexItem sx={{ borderColor: "#2f324e", display: { xs: "none", md: "block" } }} />

                {/* Right Info Column */}
                <div className="flex-1 pt-2">
                  <InfoRow 
                    icon={<Mail size={18} />} 
                    label="Email" 
                    value={profile?.email || ""} 
                    placeholder=""
                  />
                  <InfoRow 
                    icon={<Phone size={18} />} 
                    label="Phone" 
                    value={profile?.phone || ""} 
                    placeholder="Add a phone"
                  />
                  <InfoRow 
                    icon={<Smartphone size={18} />} 
                    label="Mobile phone" 
                    value={null} // Backend chưa có field này trong DTO, có thể thêm sau
                    placeholder="Add a mobile phone"
                  />
                  <InfoRow 
                    icon={<MapPin size={18} />} 
                    label="Location" 
                    value={profile?.address || ""} 
                    placeholder="Add a location"
                  />
                </div>
              </div>
              {/* BOTTOM SECTION: CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left Cards Container */}
                <div className="flex flex-col gap-6">
                    {/* Birthday Card */}
                    <DetailCard 
                        icon={<Gift size={18} />} 
                        label="Birthday" 
                        value={profile?.birthday || null} 
                        placeholder="Add a birthday" 
                    />
                    
                    {/* Work Anniversary Card (Static for now) */}
                    <DetailCard 
                        icon={<CalendarDays size={18} />} 
                        label="Work anniversary" 
                        value={null} 
                        placeholder="Add a work anniversary" 
                    />
                </div>

                {/* Right Illustration Card */}
                <div className="bg-[#1f2235] border border-[#2f324e] rounded-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-gray-500 transition-colors cursor-pointer min-h-[200px]">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                    
                    <img 
                        src="https://cdn.monday.com/images/profile-card-teams-background.svg" 
                        alt="Teams"
                        className="w-32 mb-4 opacity-90" 
                    />
                    
                    <h3 className="text-white font-semibold text-lg mb-1">Create and join teams</h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                        Collaborate better with teammates and keep track of projects you're interested in
                    </p>
                </div>

              </div>

            </Box>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ProfileModal;