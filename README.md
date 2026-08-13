# AWDF---24DIT022

Full-stack coursework project combining a React portfolio (Practicals 1-3) with an Express + MongoDB backend (Practicals 4-5).

## Tech Stack

- Frontend: React 18, Vite, React Router v6
- Backend: Express, Mongoose, MongoDB
- Tooling: Nodemon, dotenv, cors

## Project Structure

AWDF---24DIT022/
- backend/
  - controllers/
  - middleware/
  - models/
    - Task.js
  - routes/
    - tasks.js
  - server.js
- src/
  - components/
    - Navbar.jsx
    - Footer.jsx
    - Spinner.jsx
    - ErrorMessage.jsx
  - pages/
    - Home.jsx
    - Projects.jsx
    - Contact.jsx
    - NotFound.jsx
  - App.jsx
  - main.jsx
- public/

## Practicals Completed

| # | Topic | Status |
|---|---|---|
| 1 | React + Vite + Component Architecture + Props | Done |
| 2 | React Router + useState + Controlled Forms | Done |
| 3 | GitHub REST API Integration (loading/error/search/retry) | Done |
| 4 | Express REST API (CRUD + middleware + error handling) | Done |
| 5 | MongoDB + Mongoose Integration | Done |

## Running the Project

Frontend:

npm install
npm run dev

Runs on http://localhost:5173

Backend:

npm run server

Runs on http://localhost:5000

Both must be running simultaneously in separate terminals.

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## Environment Variables

Create a .env file in the project root (not committed to Git):

MONGO_URI=mongodb://127.0.0.1:27017/taskdb

## Author

Pankti Halatwala