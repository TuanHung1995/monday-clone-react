import {
  Bell,
  Mail,
  UserRoundPlus,
  Bot,
  Search,
  HelpCircle,
  Heart,
  Grid,
  Circle
} from "lucide-react";

const NavbarIcons = () => {
  const icons = [
    Bell,
    Mail,
    UserRoundPlus,
    Bot,
    Search,
    HelpCircle,
    Heart,
    Grid,
  ];

  return (
    <div className="flex items-center gap-4">
      {icons.map((Icon, i) => (
        <button
          key={i}
          className="relative p-1 hover:bg-[#32365a] rounded-md transition"
        >
          <Icon size={18} className="text-gray-300" />
          {i === 0 && ( // Ví dụ: Bell có thông báo
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </button>
      ))}
      <Circle size={18} className="text-red-500" /> {/* chấm đỏ như hình */}
    </div>
  );
};

export default NavbarIcons;
