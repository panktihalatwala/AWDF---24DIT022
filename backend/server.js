import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.url} - ${new Date().toLocaleString()}`
  );
  next();
});

// Home Route
app.get("/", (req, res) => {
  res.send("Task Manager API is Running...");
});

// Mount task routes
app.use("/tasks", taskRoutes);

// 404 Handler (must come after all routes)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handler (must be last, 4 arguments)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong on the server" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});