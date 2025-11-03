# 📝 Todo-App (Kanban Dashboard)

A **Kanban-style To-Do List Dashboard** built using **Next.js**, **Zustand**, and **React Query**.  
This app allows users to manage tasks across four columns: **Backlog**, **In Progress**, **Review**, and **Done**, with drag-and-drop, search, and CRUD functionality.

---

## 🚀 Live Demo

🔗 **Deployed App:** [https://todo-app-two-smoky-57.vercel.app/](https://todo-app-two-smoky-57.vercel.app/)

🔗 **GitHub Repository:** [https://github.com/Hanan88/todo-app](https://github.com/Hanan88/todo-app)

---

## 🧠 Features

✅ View tasks in **4 Kanban columns**  
✅ **Add, Edit, and Delete** tasks  
✅ **Drag & Drop** tasks between columns (with smooth transitions)  
✅ **Search** by title or description  
✅ **Pagination** / Load more functionality  
✅ **React Query caching** for fast and efficient data updates  
✅ Clean, reusable UI components (`Button`, `Text`, `Input`, etc.)  
✅ **Zustand** for lightweight state management  
✅ **Next.js Metadata** for SEO optimization  
✅ Mock API via **json-server**

---

## 🧩 Tech Stack

| Category | Tools / Libraries |
|-----------|-------------------|
| **Framework** | Next.js (React 18) |
| **State Management** | Zustand |
| **Data Fetching** | React Query |
| **Mock API** | json-server |
| **UI Styling** | TailwindCSS |
| **Type Checking** | TypeScript |
| **Drag & Drop** | `react-beautiful-dnd` |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Hanan88/todo-app.git
cd todo-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run JSON Server (Mock API)
```bash
npx json-server --watch db.json --port 5000
```
🔗 **API will run at:** 👉 http://localhost:5000/tasks

### 4️⃣ Run the Development Server
```bash
npm run dev
```
🔗 **App will run at:** 👉 http://localhost:3000

---