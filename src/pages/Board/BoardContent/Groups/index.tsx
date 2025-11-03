import React from "react";
import TaskGroup from "./TaskGroup/TaskGroup";
import AddGroupButton from "../AddButton/AddGroupButton";

const BoardPage: React.FC = () => {
  // Giả lập dữ liệu API từ backend Spring Boot
  const groups = [
    {
      id: 1,
      name: "Team Tasks",
      columns: [
        { id: 1, name: "Owner", type: "person" },
        { id: 2, name: "Status", type: "status" },
        { id: 3, name: "Due Date", type: "date" },
      ],
      tasks: [
        {
          id: 1,
          name: "Fix login bug",
          columnValues: [
            { column: { id: 1, type: "person", name: "Owner" }, value: "" },
            { column: { id: 2, type: "status", name: "Status" }, value: "Working on it", color: "#fbbf24" },
            { column: { id: 3, type: "date", name: "Due Date" }, value: "Feb 10" },
          ],
        },
        {
          id: 2,
          name: "Update user profile page",
          columnValues: [
            { column: { id: 1, type: "person", name: "Owner" }, value: "" },
            { column: { id: 2, type: "status", name: "Status" }, value: "Stuck", color: "#ef4444" },
            { column: { id: 3, type: "date", name: "Due Date" }, value: "Feb 12" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Personal Tasks",
      columns: [
        { id: 4, name: "Owner", type: "person" },
        { id: 5, name: "Status", type: "status" },
        { id: 6, name: "Due Date", type: "date" },
      ],
      tasks: [
        {
          id: 3,
          name: "Buy groceries",
          columnValues: [
            { column: { id: 4, type: "person", name: "Owner" }, value: "" },
            { column: { id: 5, type: "status", name: "Status" }, value: "Done", color: "#22c55e" },
            { column: { id: 6, type: "date", name: "Due Date" }, value: "Feb 11" },
          ],
        },
        {
          id: 4,
          name: "Walk the dog",
          columnValues: [
            { column: { id: 4, type: "person", name: "Owner" }, value: "" },
            { column: { id: 5, type: "status", name: "Status" }, value: "In Progress", color: "#fbbf24" },
            { column: { id: 6, type: "date", name: "Due Date" }, value: "Feb 13" },
          ],
        },
      ],
  }];

  return (
    <div className="p-4">
      {groups.map((group) => (
        <TaskGroup key={group.id} groupId={group.id} {...group} />
      ))}

      <AddGroupButton />
    </div>
  );
};

export default BoardPage;
