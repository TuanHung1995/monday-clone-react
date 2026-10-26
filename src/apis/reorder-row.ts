import type { ItemWithValues } from "@apis/work/boardTypes";

export function reorderRows(items: ItemWithValues[], oldIndex: number, newIndex: number) {
  const newItems = [...items];
  const [moved] = newItems.splice(oldIndex, 1);
  newItems.splice(newIndex, 0, moved);

  newItems.forEach((t, i) => (t.position = i));

  return newItems;
}
