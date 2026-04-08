export interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  category: string;
  priority: "high" | "medium" | "low";
}
