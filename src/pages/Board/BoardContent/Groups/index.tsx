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
import type { Group, Column, Task } from "@apis/mock-board-data-1";
import TaskTable from "./TaskTable/TaskTable";
import { BOARD_BG_COLOR_DARK } from "@utils/constants";

type ActiveItem =
  | { type: "GROUP"; group: Group }
  | { type: "COLUMN"; column: Column }
  | { type: "TASK"; task: Task; groupId: string }
  | null;

interface BoardContentProps {
  initialGroups: Group[];
  initialColumns: Column[];
}

export default function BoardContent({ initialGroups, initialColumns }: BoardContentProps) {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [activeItem, setActiveItem] = useState<ActiveItem>(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

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
        setGroups((prev) => arrayMove(prev, fromIndex, toIndex));
        // TODO: call API to persist group order
      }
    }

    // COLUMN reorder (global columns)
    if (activeData.type === "COLUMN" && overData.type === "COLUMN") {
      const fromIndex = columns.findIndex((c) => c.id === active.id);
      const toIndex = columns.findIndex((c) => c.id === over.id);
      if (fromIndex >= 0 && toIndex >= 0 && fromIndex !== toIndex) {
        setColumns((prev) => arrayMove(prev, fromIndex, toIndex));
        // TODO: call API to persist column order
      }
    }

    // TASK reorder (same group or move between groups)
    if (activeData.type === "TASK" && overData.type === "TASK") {
      const sourceGroupId = activeData.groupId;
      const targetGroupId = overData.groupId;

      setGroups((prevGroups) => {
        const next = prevGroups.map((g) => ({ ...g, tasks: [...g.tasks] })); // shallow copy
        const sourceGroup = next.find((g) => g.id === sourceGroupId);
        const targetGroup = next.find((g) => g.id === targetGroupId);
        if (!sourceGroup || !targetGroup) return prevGroups;

        const activeIdx = sourceGroup.tasks.findIndex((t) => t.id === active.id);
        const overIdx = targetGroup.tasks.findIndex((t) => t.id === over.id);

        if (activeIdx === -1 || overIdx === -1) return prevGroups;

        const [moved] = sourceGroup.tasks.splice(activeIdx, 1);
        // if moving within same group and after removal toIndex may shift:
        if (sourceGroupId === targetGroupId) {
          const adjustedIndex = activeIdx < overIdx ? overIdx - 1 : overIdx;
          targetGroup.tasks.splice(adjustedIndex, 0, moved);
        } else {
          targetGroup.tasks.splice(overIdx, 0, moved);
        }

        // TODO: call API to persist task movement (group change/order)
        return next;
      });
    }

    setActiveItem(null);
  };

  const orderedGroups = [...groups].sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));

  return (
    <Box sx={{ p: 2, bgcolor: BOARD_BG_COLOR_DARK }}>
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
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
            {activeItem.column.name}
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
