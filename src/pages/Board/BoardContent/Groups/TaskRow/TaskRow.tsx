// src/pages/Board/BoardContent/Groups/TaskRow/TaskRow.tsx
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ItemWithValues, ColumnResponse } from "@apis/work/boardTypes";
import { StatusCell } from './StatusCell';

interface TaskRowProps {
  task: ItemWithValues;
  groupId: string;
  groupColor: string;
  columns: ColumnResponse[];
}

export const TaskRow: React.FC<TaskRowProps> = ({ task, groupId, groupColor, columns }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: "TASK", task, groupId },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };


  return (
    <div 
      ref={setNodeRef}
      style={style}
      className="flex items-stretch min-h-[36px] bg-[#2f324e] hover:bg-[#133774] border-b border-[#4b4e69] transition-colors group relative"
    >
      {/* Drag handle */}
      <div 
        {...attributes} 
        {...listeners} 
        className="flex-[0_0_8px] flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing text-gray-400"
      >
        <DragIndicatorIcon sx={{ fontSize: 14 }} />
      </div>

      <div className="flex-[0_0_6px]" style={{ backgroundColor: groupColor }} />

      <div className="flex-[0_0_40px] border-r border-[#4b4e69] flex items-center justify-center">
        <Checkbox size="small" sx={{ padding: '4px', '& .MuiSvgIcon-root': { fontSize: 18, color: '#4b4e69' }, '&.Mui-checked .MuiSvgIcon-root': { color: '#0073ea' } }} />
      </div>

      <div className="flex-[1_1_250px] min-w-[250px] border-r border-[#4b4e69] flex items-center px-4 sticky left-[54px] z-10 bg-inherit cursor-pointer text-[13px] font-normal text-white">
        <span className="truncate max-w-full hover:underline">{task.name}</span>
      </div>

      {/* Dynamic Trailing Columns */}
      {columns.map((col) => {
        const type = col.type;
        const colValueObj = task.columnValues[col.id.toString()];
        const cellValue = colValueObj?.textValue || colValueObj?.value || "";
        // Match the same widths used in GroupHeader
        const widthClass = 
          type === "STATUS" || type === "PRIORITY" ? "flex-[0_0_140px]" :
          type === "OWNER" || type === "DATE" ? "flex-[0_0_120px]" :
          type === "FILES" ? "flex-[0_0_80px]" : "flex-[0_0_140px]";

        if (type === "OWNER") {
          return (
            <div key={col.id} className={`${widthClass} border-r border-[#4b4e69] flex items-center justify-center`}>
              <div className="w-7 h-7 rounded-full bg-[#00a254] flex items-center justify-center text-white text-[11px] font-medium tracking-wide">
                {(cellValue || "JD").substring(0, 2).toUpperCase()}
              </div>
            </div>
          );
        }
        
        if (type === "STATUS") {
          return (
            <StatusCell 
              key={col.id} 
              initialValue={cellValue} 
              type="status" 
              widthClass={widthClass} 
              onChange={(newVal) => {
                // In a real app, dispatch an action here. 
                // We're just logging it for now since we rely on external data source.
                console.log(`Update Task ${task.id} Status to ${newVal}`);
              }} 
            />
          );
        }

        if (type === "PRIORITY") {
          return (
            <StatusCell 
              key={col.id} 
              initialValue={cellValue} 
              type="priority" 
              widthClass={widthClass} 
              onChange={(newVal) => {
                console.log(`Update Task ${task.id} Priority to ${newVal}`);
              }} 
            />
          );
        }

        if (type === "FILES") {
          return (
            <div key={col.id} className={`${widthClass} border-r border-[#4b4e69] flex items-center justify-center gap-1 cursor-pointer hover:bg-[#133774]`}>
              <InsertDriveFileOutlinedIcon sx={{ fontSize: 16 }} className="text-gray-300" />
            </div>
          );
        }

        // Generic fallback for any other custom column like "Date" or newly added ones
        return (
          <div key={col.id} className={`${widthClass} border-r border-[#4b4e69] flex items-center justify-center text-[13px] text-white`}>
            {cellValue}
          </div>
        );
      })}

      <div className="flex-[0_0_40px] bg-[#30324e] border-l border-[#4b4e69]" />
    </div>
  );
};
