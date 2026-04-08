import { Task } from "../types";
import { getOverallStats, getCategoryCompletionRate } from "../utils/statistics";

interface StatsPanelProps {
  tasks: Task[];
}

export function StatsPanel({ tasks }: StatsPanelProps) {
  const stats = getOverallStats(tasks);
  const categories = [...new Set(tasks.map(t => t.category))];

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        padding: "24px",
      }}
    >
      <h2 style={{ margin: "0 0 20px 0", fontSize: "18px", color: "#1f2937" }}>
        Sprint Statistics
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
        <div style={{ background: "#f0f9ff", borderRadius: "8px", padding: "16px" }}>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#1e40af" }}>{stats.total}</div>
          <div style={{ fontSize: "13px", color: "#6b7280" }}>Total Tasks</div>
        </div>
        <div style={{ background: "#f0fdf4", borderRadius: "8px", padding: "16px" }}>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#166534" }}>{stats.completed}</div>
          <div style={{ fontSize: "13px", color: "#6b7280" }}>Completed</div>
        </div>
        <div style={{ background: "#fef9c3", borderRadius: "8px", padding: "16px" }}>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#854d0e" }}>{stats.pending}</div>
          <div style={{ fontSize: "13px", color: "#6b7280" }}>Pending</div>
        </div>
        <div style={{ background: "#faf5ff", borderRadius: "8px", padding: "16px" }}>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#6b21a8" }}>{stats.completionRate}%</div>
          <div style={{ fontSize: "13px", color: "#6b7280" }}>Completion Rate</div>
        </div>
      </div>

      <h3 style={{ margin: "0 0 12px 0", fontSize: "15px", color: "#374151" }}>
        By Category
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {categories.map(category => {
          const rate = getCategoryCompletionRate(tasks, category);
          return (
            <div key={category}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontSize: "14px", color: "#4b5563", textTransform: "capitalize" }}>
                  {category}
                </span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#1f2937" }}>{rate}%</span>
              </div>
              <div
                style={{
                  height: "6px",
                  background: "#e5e7eb",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${rate}%`,
                    background: "#6366f1",
                    borderRadius: "999px",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
