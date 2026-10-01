
const BASE_URL = "http://localhost:5000/tasks";

// Common function to handle API responses
async function handleResponse(response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.details?.join(", ") ||
      data.error ||
      "Something went wrong"
    );
  }

  return data;
}

// GET: Fetch all tasks
export async function getTasks() {
  const response = await fetch(BASE_URL);
  return handleResponse(response);
}

// POST: Create a task
export async function createTask(task) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  });

  return handleResponse(response);
}

// PUT: Update a task
export async function updateTask(id, task) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  });

  return handleResponse(response);
}

// DELETE: Delete a task
export async function deleteTask(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });

  return handleResponse(response);
}