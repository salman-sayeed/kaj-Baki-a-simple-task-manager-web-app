<img src="https://imgur.com/pY8sKiF.png" height="200">

# Kaj Baki - A Simple Task Manager Web-App
A simple full-stack task manager web app built with Next.js, Node.js, Express and MongoDB Atlas.

Live Demo: https://kaj-baki-a-simple-task-manager-web.vercel.app/

---

## 💠 Features

- Add tasks with a title, description and status
- View all tasks in a clean card layout
- Update task status to To Do, In Progress or Done
- Delete tasks
- Data persists via MongoDB Atlas

---

## 💠 Tech Stack

**Frontend:** Next.js 16, React, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas (Mongoose)  
**Deployment:** Vercel (frontend + backend)

---

## 💠 Project Structure
```bash
kaj-baki/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   └── TaskCard.jsx
│   └── .env.local
│
└── README.md
```

---

## 💠 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/en/download) installed
- A [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) account with a cluster ready
- [Git](https://git-scm.com/install/) installed

### 1. Clone the repo

```bash
git clone https://github.com/your-username/kaj-baki-a-simple-task-manager-web-app.git
cd kaj-baki-a-simple-task-manager-web-app
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:
```bash
PORT=5001

MONGODB_URI=your_mongodb_atlas_connection_string_here
```
Start the backend server:

```bash
node server.js
```

You should see:
```bash
Connected to MongoDB Atlas

Server running on port 5001
```

### 3. Set up the frontend

Open a new terminal tab:

```bash
cd frontend
npm install
```

Create a `.env.local` file inside the `frontend/` folder:
```bash 
NEXT_PUBLIC_API_URL=http://localhost:5001
```

Start the frontend:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💠 Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `PORT` | Port the Express server runs on (e.g. `5001`) |
| `MONGODB_URI` | Your MongoDB Atlas connection string |

### Frontend (`frontend/.env.local`)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | URL of the backend API (e.g. `http://localhost:5001` for local, your Render URL for production) |

---

## 💠 Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com) with root directory set to `frontend`
- **Backend** is deployed on [Vercel](https://vercel.com) with root directory set to `backend`
- Set `NEXT_PUBLIC_API_URL` in Vercel's environment variables to your Render backend URL
- Set `MONGODB_URI` and `PORT` in Render's environment variables

---

## 💠 Screenshots

<img src="https://imgur.com/04StWxB.png" height="350">
<img src="https://imgur.com/AqPdEiL.png" height="350">
