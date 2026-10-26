import React from 'react';
import Checkbox from '@mui/material/Checkbox';

interface AddRowProps {
  groupColor: string;
}

export const AddRow: React.FC<AddRowProps> = ({ groupColor }) => {
  return (
    <div className="flex items-stretch min-h-[36px] bg-[#2f324e] border-b border-[#4b4e69] hover:bg-[#133774] transition-colors group">
      <div className="flex-[0_0_14px]" />
      
      {/* Lower section of color stripe has a rounded bottom-left corner slightly in monday */}
      <div className="flex-[0_0_6px] rounded-bl-md" style={{ backgroundColor: groupColor }} />

      <div className="flex-[0_0_40px] border-r border-[#4b4e69] flex items-center justify-center">
         <Checkbox size="small" disabled sx={{ padding: '4px', '& .MuiSvgIcon-root': { fontSize: 18, color: '#4b4e69' } }} />
      </div>

      {/* Add Task Input Placeholder */}
      <div className="flex-[1_1_250px] min-w-[250px] border-r border-[#4b4e69] border-b-[1.5px] border-b-transparent hover:border-b-[#0073ea] flex items-center px-4 text-[13px] text-gray-300 cursor-text">
        + Add Task
      </div>
      
      {/* Empty fill for the rest of the flex row */}
      <div className="flex-1 bg-[#30324e] border-l border-t border-transparent" />
    </div>
  );
};
