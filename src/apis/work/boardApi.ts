import axiosClient from '@apis/auth/axiosClient';
import type { BoardResponse, TaskGroupResponse, ItemResponse, ColumnResponse, ColumnValueResponse } from './boardTypes';

export const getBoardDetails = async (boardId: string) => {
  const [board, groups, items, columns, colValues] = await Promise.all([
    axiosClient.get<BoardResponse, BoardResponse>(`/boards/${boardId}`),
    axiosClient.get<TaskGroupResponse[], TaskGroupResponse[]>(`/task-groups/board/${boardId}`),
    axiosClient.get<ItemResponse[], ItemResponse[]>(`/items/board/${boardId}`),
    axiosClient.get<ColumnResponse[], ColumnResponse[]>(`/columns/board/${boardId}`),
    axiosClient.get<ColumnValueResponse[], ColumnValueResponse[]>(`/boards/col-values/${boardId}`)
  ]);

  return {
    board,
    groups,
    items,
    columns,
    colValues
  };
};

export const getMyBoards = async () => {
  return axiosClient.get<BoardResponse[], BoardResponse[]>('/boards');
};

export const reorderGroup = async (payload: { targetId: string; previousId: string | null; nextId: string | null }) => {
  return axiosClient.put('/boards/groups/reorder', payload);
};

export const reorderColumn = async (payload: { targetId: number; previousId: number | null; nextId: number | null }) => {
  return axiosClient.put('/boards/columns/reorder', payload);
};

export const reorderItem = async (payload: { targetId: string; previousId: string | null; nextId: string | null; targetGroupId: string }) => {
  return axiosClient.put('/boards/items/reorder', payload);
};
