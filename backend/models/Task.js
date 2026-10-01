import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  completed: {
    type: Boolean,
    default: false
  },

  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

taskSchema.pre("save", async function () {
  if (this.title) {
    this.title = this.title.trim();
  }
});

export default mongoose.model("Task", taskSchema);