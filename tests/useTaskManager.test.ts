import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTaskManager } from "../src/hooks/useTaskManager";
import { Task } from "../src/types";

const initialTasks: Task[] = [
  { id: "1", title: "Task A", dueDate: "2026-04-01", completed: false, category: "frontend", priority: "high" },
  { id: "2", title: "Task B", dueDate: "2026-04-03", completed: false, category: "backend", priority: "medium" },
  { id: "3", title: "Task C", dueDate: "2026-04-05", completed: false, category: "frontend", priority: "low" },
];

describe("useTaskManager", () => {
  it("should toggle a single task to completed", async () => {
    const { result } = renderHook(() => useTaskManager(initialTasks));

    await act(async () => {
      await result.current.toggleComplete("1");
    });

    expect(result.current.tasks.find(t => t.id === "1")?.completed).toBe(true);
  });

  it("should handle rapid toggles without losing state", async () => {
    const { result } = renderHook(() => useTaskManager(initialTasks));

    // Toggle two tasks rapidly (without awaiting the first)
    await act(async () => {
      const p1 = result.current.toggleComplete("1");
      const p2 = result.current.toggleComplete("2");
      await Promise.all([p1, p2]);
    });

    // BOTH tasks should be completed
    const task1 = result.current.tasks.find(t => t.id === "1");
    const task2 = result.current.tasks.find(t => t.id === "2");
    expect(task1?.completed).toBe(true);
    expect(task2?.completed).toBe(true);
  });

  it("should filter tasks by completion status", async () => {
    const { result } = renderHook(() => useTaskManager(initialTasks));

    await act(async () => {
      await result.current.toggleComplete("1");
    });

    expect(result.current.getTasksByStatus(true)).toHaveLength(1);
    expect(result.current.getTasksByStatus(false)).toHaveLength(2);
  });
});
