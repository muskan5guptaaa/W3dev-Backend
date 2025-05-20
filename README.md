
📁 Backend – README.md

```markdown
# 🧠 Task Manager Backend (Gemini AI Powered)

This is the backend of the AI-Powered Task Manager app. It includes RESTful APIs to generate tasks using Google Gemini AI, and manage CRUD operations for tasks.

## 🚀 Features

- Generate tasks from a topic using Gemini 1.5 Flash model
- Create/save new tasks
- Retrieve saved tasks
- Update task completion status
- Delete tasks
- RESTful API with Express.js

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- Google AI (Gemini 1.5 Flash)
- MongoDB (via Mongoose)
- CORS, Dotenv

## 📦 API Endpoints

| Method | Endpoint                          | Description                        |
|--------|-----------------------------------|------------------------------------|
| POST   | /api/tasks/generate               | Generate tasks using Gemini AI     |
| POST   | /api/tasks/create                 | Save a new task                    |
| GET    | /api/tasks/get                    | Get all saved tasks                |
| PUT    | /api/tasks/:id                    | Update task completion             |
| DELETE | /api/tasks/:id                    | Delete a task                      |

## 🔐 Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://tasks_owner:npg_oj9iJKhO4VmT@ep-restless-morning-a17rx8gu-pooler.ap-southeast-1.aws.neon.tech/tasks?sslmode=require"
JWT_SECRET=supersecretkey123
GEMINI_API_KEY=AIzaSyBg0Y3KdxYqDCUSNBKGm5g9Mr-r1jEP0FI


## 🧑‍💻 Getting Started
Clone the repository:


git clone https://github.com/your-username/task-manager-backend.git
cd task-manager-backend
Install dependencies:
npm install
Start the server:
npm run dev
Server will run at:
http://localhost:5000
