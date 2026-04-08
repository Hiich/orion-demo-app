import { describe, it, expect } from "vitest";
import { getOverallStats, getCategoryCompletionRate, getPriorityBreakdown } from "../src/utils/statistics";
import { Task } from "../src/types";

const sampleTasks: Task[] = [
  { id: "1", title: "Task A", dueDate: "2026-04-01", completed: true, category: "frontend", priority: "high" },
  { id: "2", title: "Task B", dueDate: "2026-04-03", completed: true, category: "frontend", priority: "medium" },
  { id: "3", title: "Task C", dueDate: "2026-04-05", completed: false, category: "frontend", priority: "low" },
  { id: "4", title: "Task D", dueDate: "2026-04-07", completed: true, category: "backend", priority: "high" },
  { id: "5", title: "Task E", dueDate: "2026-04-09", completed: false, category: "backend", priority: "medium" },
  { id: "6", title: "Task F", dueDate: "2026-04-11", completed: false, category: "backend", priority: "low" },
  { id: "7", title: "Task G", dueDate: "2026-04-13", completed: false, category: "devops", priority: "high" },
  { id: "8", title: "Task H", dueDate: "2026-04-15", completed: true, category: "devops", priority: "medium" },
];

describe("getOverallStats", () => {
  it("should calculate correct overall statistics", () => {
    const stats = getOverallStats(sampleTasks);
    expect(stats.total).toBe(8);
    expect(stats.completed).toBe(4);
    expect(stats.pending).toBe(4);
    expect(stats.completionRate).toBe(50);
  });

  it("should handle empty array", () => {
    const stats = getOverallStats([]);
    expect(stats.total).toBe(0);
    expect(stats.completionRate).toBe(0);
  });
});

describe("getCategoryCompletionRate", () => {
  it("should calculate completion rate scoped to the category", () => {
    // frontend: 3 tasks, 2 completed -> 67%
    // backend: 3 tasks, 1 completed -> 33%
    // devops: 2 tasks, 1 completed -> 50%
    const frontendRate = getCategoryCompletionRate(sampleTasks, "frontend");
    const backendRate = getCategoryCompletionRate(sampleTasks, "backend");
    const devopsRate = getCategoryCompletionRate(sampleTasks, "devops");

    expect(frontendRate).toBe(67);
    expect(backendRate).toBe(33);
    expect(devopsRate).toBe(50);
  });

  it("should return 0 for unknown category", () => {
    const rate = getCategoryCompletionRate(sampleTasks, "unknown");
    expect(rate).toBe(0);
  });
});

describe("getPriorityBreakdown", () => {
  it("should break down stats by priority", () => {
    const breakdown = getPriorityBreakdown(sampleTasks);
    expect(breakdown.high.total).toBe(3);
    expect(breakdown.high.completed).toBe(2);
    expect(breakdown.medium.total).toBe(3);
    expect(breakdown.low.total).toBe(2);
  });
});
