import { useCallback } from "react";
import { DragEndEvent } from "@dnd-kit/core";

interface UseDnDProps {
  onColumnReorder: (ids: string[]) => void;
  onTaskReorder: (groupId: string, taskIds: string[]) => void;
}

export const useDragAndDrop = ({ onColumnReorder, onTaskReorder }: UseDnDProps) => {
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      // Kiểm tra loại item: column hay task
      const activeType = active.data.current?.type;
      const overType = over.data.current?.type;

      if (activeType === "column" && overType === "column") {
        const ids = active.data.current?.allIds || [];
        onColumnReorder(ids);
      }

      if (activeType === "task" && overType === "task") {
        const groupId = active.data.current?.groupId;
        const ids = active.data.current?.allIds || [];
        onTaskReorder(groupId, ids);
      }
    },
    [onColumnReorder, onTaskReorder]
  );

  return { handleDragEnd };
};
