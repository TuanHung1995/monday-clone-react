import React, { useState } from 'react';
import Popover from '@mui/material/Popover';

export type StatusType = 'status' | 'priority';

export interface StatusOption {
  label: string;
  colorHex: string;
}

export const STATUS_OPTIONS: StatusOption[] = [
  { label: 'Working', colorHex: '#fdab3d' }, // Orange
  { label: 'Done', colorHex: '#00c875' },    // Green
  { label: 'Stuck', colorHex: '#e2445c' },   // Red
  { label: '', colorHex: '#c4c4c4' },        // Default Grey
];

export const PRIORITY_OPTIONS: StatusOption[] = [
  { label: 'Critical', colorHex: '#333333' }, // Dark
  { label: 'High', colorHex: '#401694' },     // Purple
  { label: 'Medium', colorHex: '#579bfc' },   // Blue
  { label: 'Low', colorHex: '#579bfc' },      // Light Blue (usually different, but using blue for now)
  { label: '', colorHex: '#c4c4c4' },         // Default Grey
];

interface StatusCellProps {
  initialValue: string;
  type: StatusType;
  widthClass: string;
  onChange: (newValue: string) => void;
}

export const StatusCell: React.FC<StatusCellProps> = ({ initialValue, type, widthClass, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [currentValue, setCurrentValue] = useState(initialValue);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option: StatusOption) => {
    setCurrentValue(option.label);
    onChange(option.label);
    handleClose();
  };

  const options = type === 'status' ? STATUS_OPTIONS : PRIORITY_OPTIONS;
  const currentOption = options.find(o => o.label === currentValue) || options.find(o => o.label === '');

  const open = Boolean(anchorEl);
  const id = open ? 'status-popover' : undefined;

  return (
    <div className={`${widthClass} border-r border-[#4b4e69] p-[1px]`}>
      {/* The Cell Itself */}
      <div 
        onClick={handleClick}
        className="w-full h-full flex items-center justify-center text-white text-[13px] cursor-pointer hover:opacity-90 transition-opacity relative group/cell"
        style={{ backgroundColor: currentOption?.colorHex }}
      >
        {currentOption?.label}
        {/* Subtle hover fold effect simulation */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-white border-r-transparent opacity-0 group-hover/cell:opacity-30 transition-opacity" />
      </div>

      {/* The Popover Menu */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: {
            mt: 0.5,
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '200px', // Standard Monday width
          }
        }}
      >
        <div className="flex flex-col p-4 bg-[#2f324e]">
          <div className="flex flex-col gap-2">
            {options.map((option, idx) => (
              <div
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full h-8 flex items-center justify-center text-white text-[13px] cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: option.colorHex }}
              >
                {option.label}
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-[#4b4e69]">
            <button className="w-full flex items-center justify-center text-[13px] text-white hover:bg-[#133774] rounded-md py-1.5 transition-colors">
              Edit Labels
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
};
