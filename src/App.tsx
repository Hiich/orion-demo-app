import "./App.css";
import { mockTasks } from "./mockData";
import { useTaskManager } from "./hooks/useTaskManager";
import { TaskList } from "./components/TaskList";
import { StatsPanel } from "./components/StatsPanel";

function App() {
  const { tasks, loading, toggleComplete } = useTaskManager(mockTasks);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
      <header style={{ marginBottom: "36px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#111827" }}>
          Sprint Task Dashboard
        </h1>
        <p style={{ color: "#6b7280", fontSize: "15px", marginTop: "4px" }}>
          Track and manage your current sprint tasks
        </p>
      </header>

      {loading && (
        <div style={{ textAlign: "center", color: "#6366f1", marginBottom: "12px", fontSize: "14px" }}>
          Updating...
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "32px", alignItems: "start" }}>
        <TaskList tasks={tasks} onToggle={toggleComplete} />
        <StatsPanel tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
