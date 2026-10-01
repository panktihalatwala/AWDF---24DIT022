const validateTask = (req, res, next) => {
  const { title } = req.body;

  if (req.method === "POST") {
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        error: "Task title is required and must be a non-empty string"
      });
    }
  }

  if (req.method === "PUT" && "title" in req.body) {
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        error: "Task title must be a non-empty string"
      });
    }
  }

  next();
};

export default validateTask;