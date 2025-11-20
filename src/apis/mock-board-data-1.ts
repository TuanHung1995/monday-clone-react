export type Column = {
  id: string
  name: string
  order_index?: number
  type?: string
}

export type Task = {
  id: string
  name: string
  values?: Record<string, string>
  order_index?: number
  groupId?: string
}

export type Group = {
  id: string
  title: string
  tasks: Task[]
  order_index?: number
}

export const mockColumns: Column[] = [
  { id: "col-1", name: "Task", order_index: 0 },
  { id: "col-2", name: "Status", order_index: 1 },
  { id: "col-3", name: "Priority", order_index: 2 },
  { id: "col-4", name: "Owner", order_index: 3 },
];

export const mockGroups: Group[] = [
  {
    id: "group-1",
    title: "To Do",
    tasks: [
      { id: "task-1", name: "Design login screen", values: { "col-1": "Working", "col-2": "High", "col-3": "Hung" }, order_index: 0 },
      { id: "task-2", name: "API Auth Integration", values: { "col-1": "Stuck", "col-2": "Medium", "col-3": "Tuan" }, order_index: 1 },
    ],
    order_index: 1,
  },
  {
    id: "group-2",
    title: "In Progress",
    tasks: [
      { id: "task-3", name: "UI for Board Page", values: { "col-1": "Working", "col-2": "Low", "col-3": "Huy" }, order_index: 0 },
      { id: "task-4", name: "Create Column", values: { "col-1": "Done", "col-2": "High", "col-3": "Hung" }, order_index: 1 },
    ],
    order_index: 0,
  },
  {
    id: "group-3",
    title: "Done",
    tasks: [
      { id: "task-5", name: "Setup Project", values: { "col-1": "Done", "col-2": "Low", "col-3": "Admin" }, order_index: 0 },
    ],
    order_index: 2,
  },
];
