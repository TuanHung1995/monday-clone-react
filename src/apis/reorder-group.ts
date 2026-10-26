import type { TaskGroupWithItems } from "@apis/work/boardTypes";

export function reorderGroups(groups: TaskGroupWithItems[], oldIndex: number, newIndex: number) {
  const newGroups = [...groups];
  const [moved] = newGroups.splice(oldIndex, 1);
  newGroups.splice(newIndex, 0, moved);

  newGroups.forEach((g, i) => (g.position = i));

  return newGroups;
}
