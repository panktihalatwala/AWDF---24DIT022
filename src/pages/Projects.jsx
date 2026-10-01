
import { useEffect, useState, useCallback } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../api";
import Toast from "../components/Toast";

function Projects() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [error, setError] = useState("");
  const [toast, setToast] = useState({
    message: "",
    type: "success"
  });

  // Show toast notification
  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  // Fetch all tasks
  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch tasks when component loads
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Create task
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required");
      showToast("Task title is required", "error");
      return;
    }

    const newTask = {
      title: title.trim(),
      description,
      priority
    };

    // Optimistic UI update
    const temporaryTask = {
      ...newTask,
      _id: `temp-${Date.now()}`,
      completed: false
    };

    setTasks((previous) => [temporaryTask, ...previous]);

    setTitle("");
    setDescription("");
    setPriority("medium");

    setSaving(true);
    setError("");

    try {
      const savedTask = await createTask(newTask);

      setTasks((previous) =>
        previous.map((task) =>
          task._id === temporaryTask._id ? savedTask : task
        )
      );

      showToast("Task created successfully!");
    } catch (err) {
      setTasks((previous) =>
        previous.filter(
          (task) => task._id !== temporaryTask._id
        )
      );

      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setSaving(false);
    }
  };

  // Update task completion status
  const handleToggle = async (task) => {
    setUpdatingId(task._id);
    setError("");

    try {
      const updated = await updateTask(task._id, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
        priority: task.priority
      });

      setTasks((previous) =>
        previous.map((item) =>
          item._id === task._id ? updated : item
        )
      );

      showToast("Task updated successfully!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    setDeletingId(id);
    setError("");

    try {
      await deleteTask(id);

      setTasks((previous) =>
        previous.filter((task) => task._id !== id)
      );

      showToast("Task deleted successfully!");
    } catch (err) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="task-container">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() =>
          setToast({ message: "", type: "success" })
        }
      />

      <h1>My Task Manager</h1>

      {/* Task creation form */}
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={saving}
        />

        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={saving}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          disabled={saving}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Add Task"}
        </button>
      </form>

      {/* Error display */}
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}

      {/* Loading state */}
      {loading && <p>Loading tasks...</p>}

      {/* Empty state */}
      {!loading && !error && tasks.length === 0 && (
        <p>No tasks found. Add your first task!</p>
      )}

      {/* Task list */}
      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <h3
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {task.title}
            </h3>

            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>

            <p>
              Status: {task.completed ? "Completed" : "Pending"}
            </p>

            <button
              onClick={() => handleToggle(task)}
              disabled={
                updatingId === task._id ||
                deletingId === task._id ||
                task._id.startsWith("temp-")
              }
            >
              {updatingId === task._id
                ? "Updating..."
                : task.completed
                ? "Mark Pending"
                : "Complete"}
            </button>

            <button
              onClick={() => handleDelete(task._id)}
              disabled={
                deletingId === task._id ||
                updatingId === task._id ||
                task._id.startsWith("temp-")
              }
            >
              {deletingId === task._id
                ? "Deleting..."
                : "Delete"}
            </button>
          </div>
        ))}
      </div>

      {/* Retry loading tasks */}
      {error && !loading && (
        <button onClick={fetchTasks}>
          Retry Loading Tasks
        </button>
      )}
    </div>
  );
}

export default Projects;