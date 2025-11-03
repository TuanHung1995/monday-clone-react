import React from "react";
import ColumnHeader from "../ColumnHeader/ColumnHeader";
import TaskRow from "../TaskRow/TaskRow";
// import AddColumnButton from "./AddColumnButton";
import AddTaskRow from "../../AddButton/AddTaskRow";

interface Column {
  id: number;
  name: string;
  type: string;
}

interface Task {
  id: number;
  name: string;
  columnValues: { column: Column; value: string; color?: string }[];
}

interface TaskTableProps {
  groupId: number;
  columns: Column[];
  tasks: Task[];
}

const TaskTable: React.FC<TaskTableProps> = ({ groupId, columns, tasks }) => {
  return (
    <table className="text-left border-collapse w-full">
      <thead>
        <tr className="text-gray-300 border-b border-gray-600">
          <td className="p-1 text-center w-12">
            <input type="checkbox" />
          </td>
          <th className="p-1 w-[300px] text-center">Task</th>

          {columns.map((col) => (
            <ColumnHeader key={col.id} column={col} />
          ))}

          <th className="p-1 text-center">
            {/* <AddColumnButton groupId={groupId} /> */}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}

        <AddTaskRow groupId={groupId} />
      </tbody>
    </table>
  );
};

export default TaskTable;
