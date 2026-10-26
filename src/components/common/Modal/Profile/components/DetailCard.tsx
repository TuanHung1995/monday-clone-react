export const DetailCard = ({ icon, label, value, placeholder }: { icon: React.ReactNode, label: string, value: string | null, placeholder: string }) => (
  <div className="bg-[#1f2235] border border-[#2f324e] rounded-lg p-5 flex flex-col h-full hover:border-gray-500 transition-colors cursor-pointer">
    <div className="flex items-center gap-2 mb-2 text-gray-300 font-medium">
      {icon}
      <span>{label}</span>
    </div>
    <div className={`text-sm ${value ? 'text-gray-200' : 'text-gray-500'}`}>
      {value || placeholder}
    </div>
  </div>
);