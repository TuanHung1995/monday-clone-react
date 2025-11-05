import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
});

// Column
export const getColumns = (boardId: string) => api.get(`/boards/${boardId}/columns`);
export const createColumn = (boardId: string, name: string) =>
  api.post(`/boards/${boardId}/columns`, { name });
export const updateColumnOrder = (boardId: string, columnIds: string[]) =>
  api.put(`/boards/${boardId}/columns/reorder`, { columnIds });

// Task
export const getTasks = (groupId: string) => api.get(`/groups/${groupId}/tasks`);
export const createTask = (groupId: string, title: string) =>
  api.post(`/groups/${groupId}/tasks`, { title });
export const updateTaskOrder = (groupId: string, taskIds: string[]) =>
  api.put(`/groups/${groupId}/tasks/reorder`, { taskIds });
