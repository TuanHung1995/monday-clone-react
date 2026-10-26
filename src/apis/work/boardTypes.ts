export interface BoardResponse {
  id: string;
  name: string;
  description: string;
  type: string;
  purpose: string;
  workspaceId: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskGroupResponse {
  id: string;
  boardId: string;
  title: string;
  color: string;
  position: number;
  collapsed: boolean;
  archived: boolean;
  archivedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ItemResponse {
  id: string;
  boardId: string;
  groupId: string;
  name: string;
  position: number;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export interface ColumnResponse {
  id: number;
  boardId: string;
  title: string;
  type: string;
  description: string;
  position: number;
  width: number;
  hidden: boolean;
  createdAt: string;
}

export interface ColumnValueResponse {
  id: string;
  itemId: string;
  columnId: string;
  value: string;
  textValue?: string;
  color?: string;
  type: string;
  createdAt: string;
}

export interface ItemWithValues extends ItemResponse {
  columnValues: Record<string, ColumnValueResponse>;
}

export interface TaskGroupWithItems extends TaskGroupResponse {
  items: ItemWithValues[];
}
