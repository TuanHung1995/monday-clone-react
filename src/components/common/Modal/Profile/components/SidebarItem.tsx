export const SidebarItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-3 cursor-pointer text-sm font-medium transition-colors
    ${active ? "bg-[#0073ea] text-white" : "text-gray-400 hover:bg-[#202336] hover:text-gray-200"}`}>
    {icon}
    <span>{label}</span>
  </div>
);