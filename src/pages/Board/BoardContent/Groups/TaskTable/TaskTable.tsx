// src/components/BoardContent/TaskTable.tsx
import React from "react";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Group, Column } from "@api/mock-board-data-1";
import TaskColumn from "../TaskColumn/TaskColumn";
import TaskRow from "../TaskRow/TaskRow";

interface Props {
  group: Group;
  columns: Column[];
}

export default function TaskTable({ group, columns }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: group.id,
    data: { type: "GROUP", group },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: 20,
  } as React.CSSProperties;

  return (
    <div ref={setNodeRef} style={style}>
      {/* header (draggable via attributes/listeners) */}
      <div
        {...attributes}
        {...listeners}
        style={{
          padding: "8px 12px",
          background: "#0f172a",
          color: "white",
          borderRadius: 6,
          cursor: "grab",
        }}
      >
        {group.title}
      </div>

      {/* Columns (global columns list shown as column headers) */}
      <SortableContext items={columns.map((c) => c.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {columns.map((col) => (
            <TaskColumn key={col.id} column={col} groupId={group.id} />
          ))}
        </div>
      </SortableContext>

      {/* Tasks */}
      <SortableContext items={group.tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div style={{ marginTop: 10 }}>
          {group.tasks.map((task) => (
            <TaskRow key={task.id} task={task} groupId={group.id} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
