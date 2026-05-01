import { useState, useEffect, useCallback, useRef } from 'react';
import { getBoardDetails } from '@apis/work/boardApi';
import type { TaskGroupWithItems, ColumnResponse, ItemWithValues } from '@apis/work/boardTypes';
import { useBoardWebSocket } from './useBoardWebSocket';

export const useBoardDetails = (boardId: string | undefined) => {
  const [groups, setGroups] = useState<TaskGroupWithItems[]>([]);
  const [columns, setColumns] = useState<ColumnResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const prevBoardId = useRef<string | undefined>(boardId);

  const handleUpdate = useCallback(() => {
    // Only refetch if we are not currently dragging
    setRefreshTrigger(prev => prev + 1);
  }, []);

  useBoardWebSocket(boardId, handleUpdate);

  useEffect(() => {
    if (!boardId) return;

    const isNewBoard = prevBoardId.current !== boardId;
    prevBoardId.current = boardId;

    const fetchBoard = async () => {
      if (isNewBoard || refreshTrigger === 0) {
        setLoading(true);
      }
      try {
        const { groups: apiGroups, items: apiItems, columns: apiColumns, colValues } = await getBoardDetails(boardId);

        // Sort backend columns
        const sortedColumns = [...apiColumns].sort((a, b) => a.position - b.position);
        setColumns(sortedColumns);

        // Transform groups and nest items
        const mappedGroups: TaskGroupWithItems[] = apiGroups.map(group => {
          const groupItems = apiItems.filter(item => item.groupId === group.id);
          
          const itemsWithValues: ItemWithValues[] = groupItems.map(item => {
            // Find values for this item
            const itemValues = colValues.filter(cv => cv.itemId === item.id);
            // Map values by columnId for fast O(1) lookup
            const valuesRecord = itemValues.reduce((acc, cv) => {
              acc[cv.columnId] = cv;
              return acc;
            }, {} as Record<string, typeof cv>);

            return {
              ...item,
              columnValues: valuesRecord
            };
          }).sort((a, b) => a.position - b.position);

          return {
            ...group,
            items: itemsWithValues
          };
        }).sort((a, b) => a.position - b.position);

        setGroups(mappedGroups);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load board details'));
      } finally {
        setLoading(false);
      }
    };

    fetchBoard();
  }, [boardId, refreshTrigger]);

  return { groups, columns, setGroups, setColumns, loading, error };
};
