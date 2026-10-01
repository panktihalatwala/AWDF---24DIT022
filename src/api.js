
const BASE_URL = "http://localhost:5000";
const TASKS_URL = `${BASE_URL}/tasks`;
const AUTH_URL = `${BASE_URL}/auth`;

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

function getAuthHeaders(includeJson = false) {
  const token = localStorage.getItem("token");

  return {
    ...(includeJson && { "Content-Type": "application/json" }),
    ...(token && { Authorization: `Bearer ${token}` })
  };
}

// Register
export async function registerUser(user) {
  const response = await fetch(`${AUTH_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  return handleResponse(response);
}

// Login
export async function loginUser(user) {
  const response = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  const data = await handleResponse(response);
  localStorage.setItem("token", data.token);

  return data;
}

// Get current user
export async function getCurrentUser() {
  const response = await fetch(`${AUTH_URL}/me`, {
    headers: getAuthHeaders()
  });

  return handleResponse(response);
}

// Logout
export function logoutUser() {
  localStorage.removeItem("token");
}

// GET tasks
export async function getTasks() {
  const response = await fetch(TASKS_URL, {
    headers: getAuthHeaders()
  });

  return handleResponse(response);
}

// POST task
export async function createTask(task) {
  const response = await fetch(TASKS_URL, {
    method: "POST",
    headers: getAuthHeaders(true),
    body: JSON.stringify(task)
  });

  return handleResponse(response);
}

// PUT task
export async function updateTask(id, task) {
  const response = await fetch(`${TASKS_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(true),
    body: JSON.stringify(task)
  });

  return handleResponse(response);
}

// DELETE task
export async function deleteTask(id) {
  const response = await fetch(`${TASKS_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  });

  return handleResponse(response);
}