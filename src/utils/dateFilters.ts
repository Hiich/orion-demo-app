import { Task } from "../types";

export function filterTasksByDateRange(tasks: Task[], startDate: Date, endDate: Date): Task[] {
  return tasks.filter(task => {
    const dueDate = new Date(task.dueDate);
    return dueDate >= startDate && dueDate <= endDate;
  });
}

export function getOverdueTasks(tasks: Task[], referenceDate: Date = new Date()): Task[] {
  return tasks.filter(task => {
    if (task.completed) return false;
    const dueDate = new Date(task.dueDate);
    return dueDate < referenceDate;
  });
}
