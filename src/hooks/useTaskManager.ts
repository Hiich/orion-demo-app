import { useState, useCallback } from "react";
import { Task } from "../types";

// Simulated API delay
const simulateApi = <T>(data: T, delay = 300): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(data), delay));

export function useTaskManager(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [loading, setLoading] = useState(false);

  const toggleComplete = useCallback(async (taskId: string) => {
    setLoading(true);
    const task = tasks.find(t => t.id === taskId);
    if (!task) { setLoading(false); return; }

    const updated = { ...task, completed: !task.completed };
    await simulateApi(updated);

    setTasks(prev => prev.map(t => t.id === taskId ? updated : t));
    setLoading(false);
  }, [tasks]);

  const getTasksByStatus = useCallback((completed: boolean) => {
    return tasks.filter(t => t.completed === completed);
  }, [tasks]);

  return { tasks, loading, toggleComplete, getTasksByStatus };
}
