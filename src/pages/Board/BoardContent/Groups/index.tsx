import { useState } from "react";
import Box from "@mui/material/Box";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import type { TaskGroupWithItems, ColumnResponse, ItemWithValues } from "@apis/work/boardTypes";
import { reorderGroup, reorderColumn, reorderItem } from "@apis/work/boardApi";
import { TaskTable } from "./TaskTable/TaskTable";
import { BOARD_BG_COLOR_DARK } from "@utils/constants";

type ActiveItem =
  | { type: "GROUP"; group: TaskGroupWithItems }
  | { type: "COLUMN"; column: ColumnResponse }
  | { type: "TASK"; task: ItemWithValues; groupId: string }
  | null;

interface BoardContentProps {
  groups: TaskGroupWithItems[];
  columns: ColumnResponse[];
  setGroups: React.Dispatch<React.SetStateAction<TaskGroupWithItems[]>>;
  setColumns: React.Dispatch<React.SetStateAction<ColumnResponse[]>>;
}

export default function BoardContent({ groups, columns, setGroups, setColumns }: BoardContentProps) {
  const [activeItem, setActiveItem] = useState<ActiveItem>(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const onDragOver = (ev: any) => {
    const { active, over } = ev;
    if (!active || !over) return;
    
    const activeData = active.data?.current;
    const overData = over.data?.current;
    if (!activeData || !overData) return;

    if (activeData.type === "TASK") {
      const sourceGroupId = activeData.groupId;
      // If over a task, get its group. If over a group header, the target is that group.
      const targetGroupId = overData.type === "TASK" ? overData.groupId : (overData.type === "GROUP" ? over.id : null);
      
      if (!targetGroupId || sourceGroupId === targetGroupId) return;

      setGroups((prevGroups) => {
        const sourceGroup = prevGroups.find((g) => g.id === sourceGroupId);
        const targetGroup = prevGroups.find((g) => g.id === targetGroupId);
        if (!sourceGroup || !targetGroup) return prevGroups;

        const activeIdx = sourceGroup.items.findIndex((t) => t.id === active.id);
        const overIdx = overData.type === "TASK" 
          ? targetGroup.items.findIndex((t) => t.id === over.id)
          : targetGroup.items.length;

        if (activeIdx === -1) return prevGroups;

        // Move the task between groups during the drag (onDragOver)
        const nextGroups = prevGroups.map((g) => ({ ...g, items: [...g.items] }));
        const nextSourceGroup = nextGroups.find((g) => g.id === sourceGroupId)!;
        const nextTargetGroup = nextGroups.find((g) => g.id === targetGroupId)!;

        const [moved] = nextSourceGroup.items.splice(activeIdx, 1);
        moved.groupId = targetGroupId;

        // Insert at overIdx, or at the end if we hovered the group header
        const insertIdx = overIdx >= 0 ? overIdx : nextTargetGroup.items.length;
        nextTargetGroup.items.splice(insertIdx, 0, moved);

        // Crucial: Update active item data so subsequent drag events know its new home
        active.data.current.groupId = targetGroupId;

        return nextGroups;
      });
    }
  };

  const onDragStart = (ev: DragStartEvent) => {
    const data = ev.active.data?.current;
    if (!data) {
      setActiveItem(null);
      return;
    }
    if (data.type === "GROUP") setActiveItem({ type: "GROUP", group: data.group });
    else if (data.type === "COLUMN") setActiveItem({ type: "COLUMN", column: data.column });
    else if (data.type === "TASK") setActiveItem({ type: "TASK", task: data.task, groupId: data.groupId });
    else setActiveItem(null);
  };

  const onDragEnd = (ev: DragEndEvent) => {
    const active = ev.active;
    const over = ev.over;
    if (!active || !over) {
      setActiveItem(null);
      return;
    }

    const activeData = active.data?.current;
    const overData = over.data?.current;

    // defensive checks
    if (!activeData || !overData) {
      setActiveItem(null);
      return;
    }

    // GROUP reorder
    if (activeData.type === "GROUP" && overData.type === "GROUP") {
      const fromIndex = groups.findIndex((g) => g.id === active.id);
      const toIndex = groups.findIndex((g) => g.id === over.id);
      if (fromIndex >= 0 && toIndex >= 0 && fromIndex !== toIndex) {
        const newGroups = arrayMove(groups, fromIndex, toIndex);
        
        const prevId = toIndex > 0 ? newGroups[toIndex - 1].id : null;
        const nextId = toIndex < newGroups.length - 1 ? newGroups[toIndex + 1].id : null;

        reorderGroup({
          targetId: active.id.toString(),
          previousId: prevId,
          nextId: nextId
        }).catch(err => console.error("Failed to reorder group", err));

        setGroups(newGroups.map((g, idx) => ({ ...g, position: idx })));
      }
    }

    // COLUMN reorder (global columns)
    if (activeData.type === "COLUMN" && overData.type === "COLUMN") {
      const fromIndex = columns.findIndex((c) => c.id === active.id);
      const toIndex = columns.findIndex((c) => c.id === over.id);
      if (fromIndex >= 0 && toIndex >= 0 && fromIndex !== toIndex) {
        const newCols = arrayMove(columns, fromIndex, toIndex);
        
        const prevId = toIndex > 0 ? newCols[toIndex - 1].id : null;
        const nextId = toIndex < newCols.length - 1 ? newCols[toIndex + 1].id : null;

        reorderColumn({
          targetId: Number(active.id),
          previousId: prevId ? Number(prevId) : null,
          nextId: nextId ? Number(nextId) : null
        }).catch(err => console.error("Failed to reorder column", err));

        setColumns(newCols);
      }
    }

    // TASK reorder (within the same group - onDragOver handles the cross-group moves!)
    if (activeData.type === "TASK" && (overData.type === "TASK" || overData.type === "GROUP")) {
      const targetGroupId = activeData.groupId; // after onDragOver, it's definitely in its target group
      
      const nextGroups = groups.map((g) => ({ ...g, items: [...g.items] }));
      const group = nextGroups.find((g) => g.id === targetGroupId);
      
      if (group) {
        const activeIdx = group.items.findIndex((t) => t.id === active.id);
        const overIdx = overData.type === "TASK" 
          ? group.items.findIndex((t) => t.id === over.id) 
          : activeIdx;

        if (activeIdx !== -1 && overIdx !== -1 && activeIdx !== overIdx) {
          const [moved] = group.items.splice(activeIdx, 1);
          group.items.splice(overIdx, 0, moved);
        }

        const finalIdx = group.items.findIndex((t) => t.id === active.id);
        const prevId = finalIdx > 0 ? group.items[finalIdx - 1].id : null;
        const nextId = finalIdx < group.items.length - 1 ? group.items[finalIdx + 1].id : null;

        reorderItem({
          targetId: active.id.toString(),
          previousId: prevId,
          nextId: nextId,
          targetGroupId: targetGroupId
        }).catch(err => console.error("Failed to reorder item", err));

        setGroups(nextGroups);
      }
    }

    setActiveItem(null);
  };

  const orderedGroups = [...groups].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));

  return (
    <Box sx={{ p: 2, bgcolor: BOARD_BG_COLOR_DARK }}>
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd}>
      <SortableContext items={orderedGroups.map((g) => g.id)} strategy={verticalListSortingStrategy}>
        <Box 
          sx={{
            width: "fit-content",
            mb: 4,
            p: 2,
            pb: 0
          }}
        >
          {orderedGroups.map((g) => (
            <TaskTable key={g.id} group={g} columns={columns} />
          ))}
        </Box>
      </SortableContext>

      <DragOverlay>
        {activeItem?.type === "GROUP" && (
          <div style={{ padding: 12, background: "#e6f0ff", borderRadius: 6, boxShadow: "0 6px 18px rgba(0,0,0,0.12)" }}>
            {activeItem.group.title}
          </div>
        )}

        {activeItem?.type === "COLUMN" && (
          <div style={{ padding: 8, background: "#f5f5f5", borderRadius: 6, boxShadow: "0 6px 18px rgba(0,0,0,0.12)" }}>
            {activeItem.column.title}
          </div>
        )}

        {activeItem?.type === "TASK" && (
          <div style={{ padding: 8, background: "#fff", borderRadius: 6, boxShadow: "0 8px 24px rgba(0,0,0,0.14)" }}>
            {activeItem.task.name}
          </div>
        )}
      </DragOverlay>
    </DndContext>
    </Box>
    
  );
}
