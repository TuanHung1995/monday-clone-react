// import type { Column, Task } from "@api/mock-board-data-1";

// export function reorderColumns(
//   columns: Column[],
//   tasksPerGroup: Task[][],
//   oldIndex: number,
//   newIndex: number
// ) {
//   const newCols = [...columns];
//   const [moved] = newCols.splice(oldIndex, 1);
//   newCols.splice(newIndex, 0, moved);

//   newCols.forEach((c, i) => (c.order = i));

//   const orderedIds = newCols.map(c => c.id);

//   const newTasksPerGroup = tasksPerGroup.map(groupTasks =>
//     groupTasks.map(task => ({
//       ...task,
//       colValues: orderedIds.reduce((acc, colId) => {
//         acc[colId] = task.colValues[colId];
//         return acc;
//       }, {} as Record<string, any>)
//     }))
//   );

//   return { columns: newCols, tasksPerGroup: newTasksPerGroup };
// }
