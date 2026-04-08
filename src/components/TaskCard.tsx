import { Task } from "../types";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
}

const priorityColors: Record<string, string> = {
  high: "#ef4444",
  medium: "#f59e0b",
  low: "#22c55e",
};

const categoryColors: Record<string, string> = {
  frontend: "#3b82f6",
  backend: "#8b5cf6",
  devops: "#ec4899",
};

export function TaskCard({ task, onToggle }: TaskCardProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 18px",
        background: task.completed ? "#f9fafb" : "#ffffff",
        borderRadius: "10px",
        border: "1px solid #e5e7eb",
        opacity: task.completed ? 0.7 : 1,
        transition: "all 0.2s ease",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{
          width: "18px",
          height: "18px",
          cursor: "pointer",
          accentColor: "#6366f1",
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontWeight: 500,
            fontSize: "15px",
            color: "#1f2937",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.title}
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginTop: "4px",
          }}
        >
          Due: {task.dueDate}
        </div>
      </div>
      <span
        style={{
          fontSize: "12px",
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: "999px",
          color: "#fff",
          background: categoryColors[task.category] || "#6b7280",
        }}
      >
        {task.category}
      </span>
      <span
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          color: priorityColors[task.priority] || "#6b7280",
          letterSpacing: "0.05em",
        }}
      >
        {task.priority}
      </span>
    </div>
  );
}
