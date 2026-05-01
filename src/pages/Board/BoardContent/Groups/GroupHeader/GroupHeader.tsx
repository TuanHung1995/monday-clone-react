import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import NumbersIcon from '@mui/icons-material/Numbers';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import type { ColumnResponse } from "@apis/work/boardTypes";

interface GroupHeaderProps {
  title: string;
  colorHex: string;
  itemsCount: number;
  totalValue: string;
  columns: ColumnResponse[];
}

export const GroupHeader: React.FC<GroupHeaderProps> = ({ title, colorHex, itemsCount, totalValue, columns }) => {
  const [addColumnAnchorEl, setAddColumnAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleAddColumnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAddColumnAnchorEl(event.currentTarget);
  };

  const handleAddColumnClose = () => {
    setAddColumnAnchorEl(null);
  };

  const open = Boolean(addColumnAnchorEl);
  const id = open ? 'add-column-popover' : undefined;

  return (
    <div className="flex flex-col mb-0 group">
      {/* Group Title Section */}
      <div className="flex items-center mb-3 mt-4 sticky left-0 z-20 bg-transparent group/title">
        <div className="opacity-0 group-hover/title:opacity-100 transition-opacity mr-1 cursor-pointer">
          <KeyboardArrowDownIcon fontSize="small" sx={{ color: colorHex }} />
        </div>
        <h2 
          className="text-[22px] font-medium leading-tight cursor-text hover:border hover:border-[#4b4e69] px-1 rounded transition-colors truncate max-w-[500px]"
          style={{ color: colorHex }}
        >
          {title}
        </h2>
        <span className="text-gray-400 text-[13px] ml-3 font-normal mt-1">
          {itemsCount} Tasks
        </span>
      </div>

      {/* Column Headers */}
      <div className="flex items-stretch border border-[#4b4e69] rounded-t-md h-[36px] bg-[#30324e] text-[13px] font-normal text-white sticky top-0 z-30 shadow-sm">
        <div className="flex-[0_0_13px]" /> {/* Spacer for drag dots */}
        <div className="flex-[0_0_6px] rounded-tl-md" style={{ backgroundColor: colorHex }} /> {/* Color stripe spacer */}
        <div className="flex-[0_0_40px] border-r border-[#4b4e69] flex items-center justify-center" /> {/* Checkbox spacer */}
        
        {/* Name Column */}
        <div className="flex-[1_1_250px] min-w-[250px] border-r border-[#4b4e69] flex items-center px-4 sticky left-[54px] z-10 bg-[#30324e]">
          Task
        </div>
        
        {/* Dynamic Trailing Columns */}
        <SortableContext items={columns.map(c => c.id)} strategy={horizontalListSortingStrategy}>
          {columns.map((col) => (
            <SortableColumnHeader key={col.id} column={col} />
          ))}
        </SortableContext>

        <div 
          onClick={handleAddColumnClick}
          className="flex-[0_0_40px] flex items-center justify-center cursor-pointer hover:bg-[#4b4e69] rounded-tr-md transition-colors text-gray-400"
        >
          <AddIcon sx={{ fontSize: 18 }} />
        </div>
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={addColumnAnchorEl}
        onClose={handleAddColumnClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
            width: '240px',
            overflow: 'hidden'
          }
        }}
      >
        <div className="flex flex-col py-2 bg-[#2f324e] text-white">
          <div className="px-4 py-2 text-[13px] font-medium text-gray-400">
            Essentials
          </div>
          
          {[
            { label: 'Status', icon: <CheckCircleOutlineIcon sx={{ fontSize: 20 }} /> },
            { label: 'Text', icon: <TextFieldsIcon sx={{ fontSize: 20 }} /> },
            { label: 'Person', icon: <PersonOutlineIcon sx={{ fontSize: 20 }} /> },
            { label: 'Date', icon: <DateRangeIcon sx={{ fontSize: 20 }} /> },
            { label: 'Numbers', icon: <NumbersIcon sx={{ fontSize: 20 }} /> },
            { label: 'Dropdown', icon: <ArrowDropDownCircleOutlinedIcon sx={{ fontSize: 20 }} /> },
          ].map((colType, idx) => (
            <div 
              key={idx}
              onClick={() => {
                console.log(`Add new column of type: ${colType.label}`);
                handleAddColumnClose();
              }}
              className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-[#133774] transition-colors"
            >
              <div className="text-gray-400 flex items-center">
                {colType.icon}
              </div>
              <span className="text-[14px]">{colType.label}</span>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableColumnHeader = ({ column }: { column: ColumnResponse }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: { type: "COLUMN", column },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // Set widths based on column names to keep the pixel-perfect look matching our hardcoded values
  const getWidthClass = (name: string) => {
    if (name === "Status" || name === "Priority") return "flex-[0_0_140px]";
    if (name === "Owner" || name === "Date") return "flex-[0_0_120px]";
    if (name === "Files") return "flex-[0_0_80px]";
    return "flex-[0_0_140px]"; // default width
  };

  return (
    <div 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${getWidthClass(column.title)} border-r border-[#4b4e69] flex items-center justify-center cursor-grab active:cursor-grabbing hover:bg-[#4b4e69] transition-colors relative text-white`}
    >
      {column.title}
      {/* Subtle column resize handle mock */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] hover:bg-blue-400 cursor-col-resize transition-colors" />
    </div>
  );
};
