import React from "react";
import { MoreVertical } from "lucide-react";

interface ColumnHeaderProps {
  column: { id: number; name: string };
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ column }) => {
  return (
    <th className="relative p-1 pl-[35px] text-center group w-[150px]">
      <div className="flex items-center justify-center transition-all">
        <input
          className="bg-transparent border-none text-center text-gray-300 w-[80px] focus:outline-none"
          value={column.name}
          readOnly
        />
        <MoreVertical className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 cursor-pointer" />
      </div>
    </th>
  );
};

export default ColumnHeader;
