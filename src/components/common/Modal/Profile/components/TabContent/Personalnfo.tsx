import React from "react";
import { Mail, Phone, Smartphone, MapPin, Gift, CalendarDays } from "lucide-react";
import { InfoRow } from "../InfoRow";
import { DetailCard } from "../DetailCard";
import { ProfileHeader } from "../ProfileHeader";
import { type UserProfile } from "../../../../../../types/auth";

interface Props {
    profile?: UserProfile;
}

export const PersonalInfo: React.FC<Props> = ({ profile }) => {
    return (
        <div className="animate-fade-in">
            {/* Header riêng cho tab này */}
            <div className="flex gap-80 border border-[#2f324e] rounded-xl p-6 bg-[#1f2235] shadow-sm">
                <ProfileHeader profile={profile} />

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Right Info Column (Được tách từ Header cũ) */}
                    <div className="flex-1 pt-2 space-y-4">
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>
                        <InfoRow icon={<Mail size={18} />} label="Email" value={profile?.email || ""} placeholder="" />
                        <InfoRow icon={<Phone size={18} />} label="Phone" value={profile?.phone || ""} placeholder="Add a phone" />
                        <InfoRow icon={<Smartphone size={18} />} label="Mobile" value={null} placeholder="Add a mobile phone" />
                        <InfoRow icon={<MapPin size={18} />} label="Location" value={profile?.address || ""} placeholder="Add a location" />
                    </div>
                </div>
            </div>


            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col gap-6">
                    <DetailCard icon={<Gift size={18} />} label="Birthday" value={profile?.birthday || null} placeholder="Add a birthday" />
                    <DetailCard icon={<CalendarDays size={18} />} label="Work anniversary" value={null} placeholder="Add a work anniversary" />
                </div>

                {/* Team Card */}
                <div className="bg-[#1f2235] border border-[#2f324e] rounded-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-gray-500 transition-colors cursor-pointer min-h-[200px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                    <h3 className="text-white font-semibold text-lg mb-1">Create and join teams</h3>
                    <p className="text-gray-400 text-sm max-w-xs">Collaborate better with teammates</p>
                </div>
            </div>
        </div>
    );
};