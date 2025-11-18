import type { Task } from "@api/mock-board-data-1";

export function reorderRows(tasks: Task[], oldIndex: number, newIndex: number) {
  const newTasks = [...tasks];
  const [moved] = newTasks.splice(oldIndex, 1);
  newTasks.splice(newIndex, 0, moved);

  newTasks.forEach((t, i) => (t.order = i));

  return newTasks;
}
