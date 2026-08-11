import express from "express";

const router = express.Router();

// In-memory task storage
let tasks = [
  {
    id: 1,
    title: "Learn React",
    description: "Complete React practical",
    completed: false,
  },
];

let nextId = 2;

// GET /tasks - get all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST /tasks - create a new task
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: nextId++,
    title,
    description: description || "",
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - update a task
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, description, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE /tasks/:id - delete a task
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = tasks.splice(index, 1);
  res.json({ message: "Task deleted", task: deleted[0] });
});

export default router;