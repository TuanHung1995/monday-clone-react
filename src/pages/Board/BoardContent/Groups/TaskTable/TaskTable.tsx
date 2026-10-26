// src/pages/Board/BoardContent/Groups/TaskTable/TaskTable.tsx
import React from 'react';
import Box from "@mui/material/Box";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { TaskGroupWithItems, ColumnResponse } from "@apis/work/boardTypes";
import { GroupHeader } from '../GroupHeader/GroupHeader';
import { TaskRow } from '../TaskRow/TaskRow';
import { AddRow } from '../AddRow/AddRow';

interface TaskTableProps {
  group: TaskGroupWithItems;
  columns: ColumnResponse[];
}

export const TaskTable: React.FC<TaskTableProps> = ({ group, columns }) => {
  // 1. Group Drag and Drop Hooks
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: group.id,
    data: { type: "GROUP", group },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: '24px',
  } as React.CSSProperties;

  // We assign a stable color per group based on its order_index or ID
  const groupColors = ['rgb(87, 155, 252)', 'rgb(0, 200, 117)', 'rgb(253, 171, 61)'];
  const groupColor = groupColors[(group.position ?? 0) % groupColors.length];

  return (
    <Box ref={setNodeRef} style={style} className="relative w-full max-w-full overflow-x-auto pb-4 shrink-0 flex flex-col">
      
      {/* Pass listeners to GroupHeader so the title area is draggable */}
      <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing">
        <GroupHeader
          title={group.title}
          colorHex={groupColor}
          itemsCount={group.items.length}
          totalValue="0"
          columns={columns}
        />
      </div>

      {/* 
        Limit to ~5 tasks by default (5 * 36px = 180px + 36px for AddRow = 216px).
        resize-y allows the user to drag the bottom right corner to adjust the group height manually!
      */}
      <div className="flex flex-col overflow-y-auto resize-y max-h-[216px] min-h-[72px] bg-transparent rounded-b-md">
        {/* 2. Tasks Sortable Context */}
        <SortableContext items={group.items.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          {group.items.map(task => (
             <TaskRow 
               key={task.id} 
               task={task} 
               groupId={group.id} 
               groupColor={groupColor} 
               columns={columns}
             />
          ))}
        </SortableContext>
        
        {/* The bottom add row */}
        <AddRow groupColor={groupColor} />
      </div>

    </Box>
  );
};
