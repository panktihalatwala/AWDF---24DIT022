
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as removeTask
} from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    setSubmitting(true);
    setError(null);

    try {
      const newTask = await createTask({ title, description });
      setTasks((prev) => [newTask, ...prev]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleCompleted = async (task) => {
    setError(null);

    try {
      const updated = await updateTask(task._id, {
        completed: !task.completed
      });

      setTasks((prev) =>
        prev.map((t) => (t._id === updated._id ? updated : t))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteTask = async (id) => {
    setError(null);

    try {
      await removeTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      setError(err.message);
    }
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
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                    opacity: task.completed ? 0.55 : 1
                  }}
                >
                  {task.title}
                </span>

                {task.description && (
                  <span className="task-description">
                    {task.description}
                  </span>
                )}
              </div>

              <span
                className={`status-pill ${
                  task.completed ? "done" : "pending"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </span>

              <button
                className="btn-delete"
                onClick={() => handleDeleteTask(task._id)}
              >
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