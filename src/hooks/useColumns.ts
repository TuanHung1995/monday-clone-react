import { useState, useEffect } from "react";
import { getColumns, createColumn, updateColumnOrder } from "@/api/boardApi";
import { Column } from "@/types";

export const useColumns = (boardId: string) => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!boardId) return;
    setLoading(true);
    getColumns(boardId)
      .then((res) => setColumns(res.data))
      .finally(() => setLoading(false));
  }, [boardId]);

  const addColumn = async (name: string) => {
    const res = await createColumn(boardId, name);
    setColumns((prev) => [...prev, res.data]);
  };

  const reorderColumns = async (updatedColumns: Column[]) => {
    setColumns(updatedColumns);
    await updateColumnOrder(boardId, updatedColumns.map((c) => c.id));
  };

  return { columns, loading, addColumn, reorderColumns };
};
