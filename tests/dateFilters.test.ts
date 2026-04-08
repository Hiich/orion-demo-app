import { describe, it, expect } from "vitest";
import { filterTasksByDateRange, getOverdueTasks } from "../src/utils/dateFilters";
import { Task } from "../src/types";

const sampleTasks: Task[] = [
  { id: "1", title: "Task A", dueDate: "2026-04-01", completed: false, category: "frontend", priority: "high" },
  { id: "2", title: "Task B", dueDate: "2026-04-03", completed: true, category: "backend", priority: "medium" },
  { id: "3", title: "Task C", dueDate: "2026-04-05", completed: false, category: "frontend", priority: "low" },
  { id: "4", title: "Task D", dueDate: "2026-04-07", completed: false, category: "backend", priority: "high" },
];

describe("filterTasksByDateRange", () => {
  it("should include tasks on both start and end dates (boundary)", () => {
    const start = new Date("2026-04-01");
    const end = new Date("2026-04-07");
    const result = filterTasksByDateRange(sampleTasks, start, end);
    // Task D is due on April 7 (the end date) and should be included
    expect(result).toHaveLength(4);
    expect(result.map(t => t.id)).toContain("4");
  });

  it("should return empty array when no tasks in range", () => {
    const start = new Date("2026-05-01");
    const end = new Date("2026-05-31");
    const result = filterTasksByDateRange(sampleTasks, start, end);
    expect(result).toHaveLength(0);
  });
});

describe("getOverdueTasks", () => {
  it("should return incomplete tasks past due date", () => {
    const ref = new Date("2026-04-04");
    const result = getOverdueTasks(sampleTasks, ref);
    // Task A (Apr 1, incomplete) is overdue
    // Task B (Apr 3) is completed, so excluded
    // Task C (Apr 5) is not overdue yet
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });
});
