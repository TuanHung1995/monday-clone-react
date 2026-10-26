import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import {
  User, BriefcaseBusiness, Bell, Globe, Lock, ListIndentIncrease
} from "lucide-react";

import { SidebarItem } from "./components/SidebarItem";
import { PersonalInfo } from "@components/common/Modal/Profile/components/TabContent/Personalnfo";
import { PasswordTab } from "./components/TabContent/Password"; // Import tab mới
import { userApi } from "@apis/user/userApi"; // Update path
import { type UserProfile } from "../../../../types/auth";

type Props = {
  open: boolean;
  onClose: () => void;
};

// Định nghĩa danh sách Tabs
const TABS = [
  { id: "info", label: "Personal info", icon: <User size={18} /> },
  { id: "work", label: "Working status", icon: <BriefcaseBusiness size={18} /> },
  { id: "noti", label: "Notifications", icon: <Bell size={18} /> },
  { id: "lang", label: "Language & region", icon: <Globe size={18} /> },
  { id: "pass", label: "Password", icon: <Lock size={18} /> },
  { id: "session", label: "Session history", icon: <ListIndentIncrease size={18} /> },
];

const ProfileModal: React.FC<Props> = ({ open, onClose }) => {
  const [profile, setProfile] = useState<UserProfile>();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("info"); // State quản lý tab đang chọn

  useEffect(() => {
    if (open) {
      setLoading(true);
      userApi.getMe()
        .then((data) => setProfile(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [open]);

  // Hàm render nội dung bên phải dựa theo activeTab
  const renderContent = () => {
    if (loading) return <Box className="flex h-full items-center justify-center text-gray-400">Loading...</Box>;

    switch (activeTab) {
      case "info":
        return <PersonalInfo profile={profile} />;
      case "pass":
        return <PasswordTab />;
      // Các case khác render placeholder hoặc component tương ứng
      default:
        return <div className="text-gray-400 p-8">Feature coming soon...</div>;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          backgroundColor: "#181b34",
          color: "#dcdfe4",
          borderRadius: "12px",
          height: "85vh",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        },
      }}
    >
      <div className="flex h-full">

        {/* --- LEFT SIDEBAR --- */}
        <div className="w-64 bg-[#202336] flex-shrink-0 flex flex-col border-r border-[#2f324e]">
          <div className="p-6 text-xl font-semibold text-white">Profile</div>

          <div className="flex-1 overflow-y-auto">
            {TABS.map((tab) => (
              <div key={tab.id} onClick={() => setActiveTab(tab.id)}>
                <SidebarItem
                  icon={tab.icon}
                  label={tab.label}
                  active={activeTab === tab.id} // Highlight tab đang chọn
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT CONTENT --- */}
        <div className="flex-1 flex flex-col bg-[#181b34] relative overflow-y-auto custom-scrollbar">

          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 16, top: 16, color: "gray", zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <Box className="p-8">
            {renderContent()}
          </Box>
        </div>
      </div>
    </Dialog>
  );
};

export default ProfileModal;