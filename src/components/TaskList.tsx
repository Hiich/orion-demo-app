import { useState } from "react";
import { Task } from "../types";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
}

type FilterTab = "all" | "active" | "completed";

export function TaskList({ tasks, onToggle }: TaskListProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredTasks = tasks.filter(task => {
    if (activeTab === "active") return !task.completed;
    if (activeTab === "completed") return task.completed;
    return true;
  });

  const tabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "14px",
              background: activeTab === tab.key ? "#6366f1" : "#f3f4f6",
              color: activeTab === tab.key ? "#fff" : "#4b5563",
              transition: "all 0.15s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {filteredTasks.length === 0 ? (
          <div style={{ textAlign: "center", color: "#9ca3af", padding: "32px 0" }}>
            No tasks found.
          </div>
        ) : (
          filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} onToggle={onToggle} />
          ))
        )}
      </div>
    </div>
  );
}
