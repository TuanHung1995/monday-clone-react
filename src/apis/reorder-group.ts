import type { Group } from "@api/mock-board-data-1";

export function reorderGroups(groups: Group[], oldIndex: number, newIndex: number) {
  const newGroups = [...groups];
  const [moved] = newGroups.splice(oldIndex, 1);
  newGroups.splice(newIndex, 0, moved);

  newGroups.forEach((g, i) => (g.order = i));

  return newGroups;
}
