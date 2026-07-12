# AssetFlow ERP

Enterprise Asset & Resource Management System

## Problem Statement

AssetFlow ERP is a full-stack web application for managing organizational assets, employees, maintenance workflows, and resource tracking. It helps organizations efficiently manage assets, employee records, and provides a centralized dashboard with live statistics.

---

## Features

- Dashboard with live statistics
- Asset Management
  - Add Assets
  - View Assets
  - Delete Assets
- Employee Management
  - Add Employees
  - View Employees
  - Delete Employees
- REST API using Express.js
- MongoDB Atlas database
- Responsive UI using Tailwind CSS

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Project Structure

```
assetflow-erp/
│
├── frontend/
├── backend/
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/PranathiKalidindi/assetflow-erp.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### Assets

- GET /api/assets
- POST /api/assets
- DELETE /api/assets/:id

### Employees

- GET /api/employees
- POST /api/employees
- DELETE /api/employees/:id

### Dashboard

- GET /api/dashboard

---

## Future Enhancements

- User Authentication
- Role-Based Access Control
- Asset Assignment
- Booking Management
- Maintenance Scheduling
- Audit Logs
- Reports & Analytics

---

## Developed By

**Kalidindi Pranathi**

Built for **Odoo Hackathon 2026**