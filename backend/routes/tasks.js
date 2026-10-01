import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// GET /tasks - get all tasks
router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});
// GET /tasks/:id - get a single task

router.get("/:id", async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    next(err);
  }
});
// POST /tasks - create a new task

router.post("/", async (req, res, next) => {
  try {
    const { title, description, priority } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTask = await Task.create({
      title,
      description,
      priority
    });

    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});


// PUT /tasks/:id - update a task
router.put("/:id", async (req, res, next) => {
  try {
    const { title, description, completed, priority } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, completed, priority },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
});

// DELETE /tasks/:id - delete a task
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted", task: deletedTask });
  } catch (err) {
    next(err);
  }
});

export default router;