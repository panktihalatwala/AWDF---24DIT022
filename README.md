# Practical 6: Full Stack Integration React + Node + MongoDB

## Objective

To integrate a React frontend with a Node.js, Express, and MongoDB backend to build a fully functional task management application.

## Technologies Used

* React
* Vite
* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript
* CSS
* Fetch API

## Features

* Create new tasks
* View all tasks
* Update task completion status
* Delete tasks with confirmation
* Store tasks in MongoDB
* Display loading and error messages
* Show success and error toast notifications
* Optimistic UI update for task creation
* Select task priority: Low, Medium, or High

## Project Structure

* `src/` — React frontend
* `src/api.js` — API functions for CRUD operations
* `src/pages/Projects.jsx` — Task management interface
* `src/components/Toast.jsx` — Toast notification component
* `backend/` — Express backend
* `backend/models/Task.js` — Mongoose task schema
* `backend/routes/tasks.js` — Task CRUD routes
* `backend/server.js` — Backend server and middleware

## Setup and Execution

### 1. Install dependencies

Run this command in the project root:

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/task_manager
PORT=5000
```

Make sure MongoDB is running.

### 3. Start the backend

In one terminal:

```bash
npm run server
```

Backend URL: `http://localhost:5000`

### 4. Start the frontend

In another terminal:

```bash
npm run dev
```

Frontend URL: `http://localhost:5173`

## API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/tasks`     | Get all tasks    |
| GET    | `/tasks/:id` | Get a task by ID |
| POST   | `/tasks`     | Create a task    |
| PUT    | `/tasks/:id` | Update a task    |
| DELETE | `/tasks/:id` | Delete a task    |

## Conclusion

The React frontend is integrated with the Express and MongoDB backend. Users can perform CRUD operations through the interface, and task data persists in the database even after refreshing the page.
