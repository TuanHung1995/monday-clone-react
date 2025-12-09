export const InfoRow = ({ icon, label, value, placeholder }: { icon: React.ReactNode, label: string, value: string | null, placeholder: string }) => (
  <div className="flex items-start gap-4 mb-5 group cursor-pointer">
    <div className="mt-1 text-gray-400 group-hover:text-gray-200 transition-colors">
      {icon}
    </div>
    <div>
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</div>
      <div className={`text-sm ${value ? 'text-gray-200' : 'text-gray-500 italic'}`}>
        {value || placeholder}
      </div>
    </div>
  </div>
);