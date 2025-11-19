// src/components/BoardContent/TaskColumn.tsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Column } from "@api/mock-board-data-1";

interface Props {
  column: Column;
  groupId?: string; // not used here but available
}

export default function TaskColumn({ column }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: { type: "COLUMN", column },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
    minWidth: 120,
  } as React.CSSProperties;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
        padding: "6px 10px",
        background: "#f3f4f6",
        borderRadius: 6,
        border: "1px solid rgba(0,0,0,0.06)",
        cursor: "grab",
        textAlign: "center",
      }}
    >
      {column.name}
    </div>
  );
}
