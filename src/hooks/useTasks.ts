import { useState, useEffect } from "react";
import { getTasks, createTask, updateTaskOrder } from "@api/boardApis";
import { Task } from "@/types";

export const useTasks = (groupId: string) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!groupId) return;
    setLoading(true);
    getTasks(groupId)
      .then((res) => setTasks(res.data))
      .finally(() => setLoading(false));
  }, [groupId]);

  const addTask = async (title: string) => {
    const res = await createTask(groupId, title);
    setTasks((prev) => [...prev, res.data]);
  };

  const reorderTasks = async (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    await updateTaskOrder(groupId, updatedTasks.map((t) => t.id));
  };

  return { tasks, loading, addTask, reorderTasks };
};
