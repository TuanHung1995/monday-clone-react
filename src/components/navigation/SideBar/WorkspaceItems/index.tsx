interface WorkspaceItemProps {
  name: string;
  color: string;
}

const WorkspaceItem: React.FC<WorkspaceItemProps> = ({ name, color }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-6 h-6 ${color} rounded-md flex items-center justify-center text-xs text-white font-semibold`}
      >
        {name.charAt(0)}
      </div>
      <span className="font-medium text-gray-200">{name}</span>
    </div>
  );
};

export default WorkspaceItem;
