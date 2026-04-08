import { Task } from "../types";

export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  completionRate: number;
}

export function getOverallStats(tasks: Task[]): TaskStats {
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  return {
    total,
    completed,
    pending: total - completed,
    completionRate: total === 0 ? 0 : Math.round((completed / total) * 100),
  };
}

export function getCategoryCompletionRate(tasks: Task[], category: string): number {
  const completed = tasks.filter(t => t.category === category && t.completed).length;
  // BUG: denominator uses ALL tasks instead of only tasks in this category
  const total = tasks.length;
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}

export function getPriorityBreakdown(tasks: Task[]): Record<string, TaskStats> {
  const priorities = [...new Set(tasks.map(t => t.priority))];
  const breakdown: Record<string, TaskStats> = {};

  for (const priority of priorities) {
    const priorityTasks = tasks.filter(t => t.priority === priority);
    breakdown[priority] = getOverallStats(priorityTasks);
  }

  return breakdown;
}
