export type StatusValue = 'Working on it' | 'Done' | 'Stuck' | '';
export type PriorityValue = 'Critical' | 'High' | 'Medium' | 'Low' | '';

export interface TaskData {
  id: string;
  title: string;
  status: { label: StatusValue; colorHex: string };
  date: string;
  priority: { label: PriorityValue; colorHex: string };
  filesCount: number;
}

export interface TaskGroupData {
  id: string;
  title: string;
  colorHex: string;
  itemsCount: number;
  totalValue: string;
  tasks: TaskData[];
}

export interface TaskGroupTableProps {
  group: TaskGroupData;
}
