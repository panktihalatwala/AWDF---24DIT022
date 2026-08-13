import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const API_URL = "http://localhost:5000/tasks";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchTasks = () => {
    setLoading(true);
    setError(null);

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setSubmitting(true);

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create task");
        return res.json();
      })
      .then((newTask) => {
        setTasks((prev) => [newTask, ...prev]);
        setTitle("");
        setDescription("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setSubmitting(false));
  };

  const toggleCompleted = (task) => {
    fetch(`${API_URL}/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update task");
        return res.json();
      })
      .then((updated) => {
        setTasks((prev) =>
          prev.map((t) => (t._id === updated._id ? updated : t))
        );
      })
      .catch((err) => setError(err.message));
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete task");
        return res.json();
      })
      .then(() => {
        setTasks((prev) => prev.filter((t) => t._id !== id));
      })
      .catch((err) => setError(err.message));
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} onRetry={fetchTasks} />;

  return (
    <section>
      <span className="eyebrow">Backend · Express + MongoDB</span>
      <div className="section-heading">
        <h2>Tasks</h2>
      </div>

      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1 }}
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ flex: 1 }}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "Adding..." : "Add Task"}
        </button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above.</p>
      ) : (
        <div className="task-ledger">
          {tasks.map((task) => (
            <div className="task-row" key={task._id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task)}
              />
              <div className="task-row-content">
                <span
                  className="task-title"
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    opacity: task.completed ? 0.55 : 1,
                  }}
                >
                  {task.title}
                </span>
                {task.description && (
                  <span className="task-description">{task.description}</span>
                )}
              </div>
              <span className={`status-pill ${task.completed ? "done" : "pending"}`}>
                {task.completed ? "Completed" : "Pending"}
              </span>
              <button className="btn-delete" onClick={() => deleteTask(task._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Tasks;