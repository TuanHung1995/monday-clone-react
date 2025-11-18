const MenuItem = ({
    icon,
    label,
    right,
}: {
    icon: React.ReactNode;
    label: string;
    right?: React.ReactNode;
}) => {
    return (
        <div className="flex items-center justify-between py-1.5 cursor-pointer hover:bg-[#2a304a] rounded-md px-2 transition">
            <div className="flex items-center gap-2">
                <span className="text-gray-300">{icon}</span>
                <span className="text-sm">{label}</span>
            </div>
            {right && <div className="text-gray-400">{right}</div>}
        </div>
    );
};

export default MenuItem;