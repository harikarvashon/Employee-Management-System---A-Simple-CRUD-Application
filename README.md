# Employee Management System (MERN Stack)

A simple **Employee Management System** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to **add, edit, delete, and search employees** with a clean and responsive UI.

---

## 🚀 Features
- Add new employees with details (Name, Email, Role, Department, Phone).
- Edit and update employee details.
- Delete employees from the system.
- Search employees by **name** or **department**.
- Fully responsive, modern UI (pure CSS – no Tailwind/Bootstrap required).

---

## 🛠️ Tech Stack
- **Frontend**: React (with pure CSS styling)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ODM)
- **API**: RESTful endpoints for CRUD operations

---

## 📂 Project Structure
├── backend/
│ ├── models/
│ │ └── Employee.js # Mongoose schema
│ ├── routes/
│ │ └── employee.js # API routes
│ ├── server.js # Express server entry
│ ├── package.json # Backend dependencies
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── EmployeeForm.js
│ │ │ └── EmployeeTable.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ ├── public/
│ │ └── index.html # React mount point
│ ├── package.json # Frontend dependencies
│
├── package.json # Root config (concurrently setup)
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
2️⃣ Install Dependencies
Install backend & frontend dependencies together:

bash
Copy code
npm install
(Uses concurrently to install both backend and frontend packages)

3️⃣ Start Development Servers
bash
Copy code
npm run dev
Backend runs at http://localhost:5000

Frontend runs at http://localhost:3000

🔗 API Endpoints
Base URL: http://localhost:5000/api/employees

Method	Endpoint	Description
GET	/	Fetch all employees
POST	/	Add new employee
PUT	/:id	Update employee
DELETE	/:id	Delete employee

📜 Scripts (Root package.json)
json
Copy code
{
  "name": "employee-management-system",
  "version": "1.0.0",
  "scripts": {
    "install": "npm install --prefix backend && npm install --prefix frontend",
    "dev": "concurrently \"npm run server --prefix backend\" \"npm start --prefix frontend\""
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
Backend package.json scripts
json
Copy code
{
  "scripts": {
    "server": "node server.js",
    "dev": "nodemon server.js"
  }
}
Frontend package.json scripts
json
Copy code
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
📸 Screenshots
Dashboard

📜 License
This project is licensed under the MIT License.

👨‍💻 Developed by: Your Name

yaml
Copy code

---

👉 With this setup:
- Evaluators can just run:
  ```bash
  npm install
  npm run dev
And both backend & frontend will start together 🎉
