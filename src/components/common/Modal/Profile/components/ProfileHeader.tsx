import React from "react";
import { Avatar, Typography, Divider } from "@mui/material";
import { CalendarDays } from "lucide-react";
import { type UserProfile } from "../../../../../types/auth";

interface Props {
    profile?: UserProfile;
}

export const ProfileHeader: React.FC<Props> = ({ profile }) => {
    const avatarInitial = profile?.fullName ? profile.fullName.charAt(0).toUpperCase() : "?";

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start min-w-[200px]">
                <Avatar
                    sx={{
                        width: 120,
                        height: 120,
                        bgcolor: "#5960e6",
                        fontSize: "3rem",
                        fontWeight: 400,
                        mb: 2,
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
        </div>
    );
};