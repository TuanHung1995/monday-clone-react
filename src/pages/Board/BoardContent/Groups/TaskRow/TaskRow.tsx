// src/components/BoardContent/TaskRow.tsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "@api/mock-board-data-1";

interface Props {
  task: Task;
  groupId: string;
}

export default function TaskRow({ task, groupId }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: "TASK", task, groupId },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  } as React.CSSProperties;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
        padding: 10,
        background: "white",
        borderRadius: 6,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        marginBottom: 8,
        cursor: "grab",
      }}
    >
      {task.name}
    </div>
  );
}
