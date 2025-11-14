// src/mock/boardData.ts
export type Column = {
  id: string
  name: string
}

export type Task = {
  id: string
  name: string
  values?: Record<string, string>
}

export type Group = {
  id: string
  title: string
  tasks: Task[]
}

export const mockColumns: Column[] = [
  { id: "col-status", name: "Status" },
  { id: "col-priority", name: "Priority" },
  { id: "col-owner", name: "Owner" },
];

export const mockGroups: Group[] = [
  {
    id: "group-1",
    title: "To Do",
    tasks: [
      { id: "task-1", name: "Design login screen", values: { "col-status": "Working", "col-priority": "High", "col-owner": "Hung" } },
      { id: "task-2", name: "API Auth Integration", values: { "col-status": "Stuck", "col-priority": "Medium", "col-owner": "Tuan" } },
    ],
  },
  {
    id: "group-2",
    title: "In Progress",
    tasks: [
      { id: "task-3", name: "UI for Board Page", values: { "col-status": "Working", "col-priority": "Low", "col-owner": "Huy" } },
      { id: "task-4", name: "Create Column Component", values: { "col-status": "Done", "col-priority": "High", "col-owner": "Hung" } },
    ],
  },
  {
    id: "group-3",
    title: "Done",
    tasks: [
      { id: "task-5", name: "Setup Project Structure", values: { "col-status": "Done", "col-priority": "Low", "col-owner": "Admin" } },
    ],
  },
];
