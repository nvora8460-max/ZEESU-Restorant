# Restaurant Reservation Website

A full-stack restaurant website built with **React + Vite** on the frontend and **Node.js + Express + MongoDB/Mongoose** on the backend.

The website provides restaurant information, menu sections, team information, and a reservation form. Reservation requests are sent from the React frontend to the Express API and stored in MongoDB.

---

## Features

### Frontend

- Responsive restaurant landing page
- Navigation bar
- Hero section
- About section
- Restaurant qualities/services
- Food menu
- Team section
- Restaurant information
- Reservation form
- Success page after reservation
- 404 / Not Found page
- React Router navigation
- Toast notifications for success and errors
- Restaurant images and SVG assets
- Axios API requests

### Backend

- Express.js REST API
- MongoDB database connection using Mongoose
- Reservation model
- Reservation API endpoint
- Request validation
- Email validation
- Central error-handling middleware
- CORS configuration
- Environment variable configuration

---

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Axios
- React Hot Toast
- React Icons
- React Scroll
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Validator
- Nodemon

---

## Project Structure

```text
Project/
│
├── README.md
├── .gitignore
│
├── frontend/
│   ├── public/
│   │   ├── images
│   │   ├── SVG assets
│   │   └── other static files
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Qualities.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Team.jsx
│   │   │   └── WhoWeAre.jsx
│   │   │
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── MenuPage.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── Success.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── modern-theme.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── restApi.json
│
└── backend/
    ├── config/
    │   └── config.env
    │
    ├── controller/
    │   └── reservation.js
    │
    ├── database/
    │   └── dbConnection.js
    │
    ├── error/
    │   └── error.js
    │
    ├── models/
    │   └── reservationSchema.js
    │
    ├── routes/
    │   └── reservationRoutes.js
    │
    ├── app.js
    ├── server.js
    ├── package.json
    └── package-lock.json
```

---

# Getting Started

## 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Project
```

---

# Frontend Setup

Open a terminal inside the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will normally be available at:

```text
http://localhost:5173
```

### Frontend Commands

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

---

# Backend Setup

Open another terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create the environment configuration file:

```text
backend/config/config.env
```

Add:

```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

Replace:

```text
your_mongodb_connection_string
```

with your MongoDB connection string.

### Start Backend

Development mode:

```bash
npm run dev
```

Production/start mode:

```bash
npm start
```

The backend runs on:

```text
http://localhost:4000
```

---

# Environment Variables

The backend uses:

```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

### PORT

Defines the port used by the Express server.

Example:

```env
PORT=4000
```

### MONGO_URL

MongoDB connection string used by Mongoose.

Example format:

```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
```

Do not commit your real MongoDB credentials to GitHub.

### FRONTEND_URL

Used by the backend CORS configuration.

Example:

```env
FRONTEND_URL=http://localhost:5173
```

---

# API Documentation

## Reservation API

### Create Reservation

```http
POST /api/v1/reservation/send
```

Full local URL:

```text
http://localhost:4000/api/v1/reservation/send
```

### Request Headers

```http
Content-Type: application/json
```

### Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "date": "2026-10-15",
  "time": "19:30"
}
```

### Successful Response

```json
{
  "success": true,
  "message": "Reservation sent successfully"
}
```

### Validation Error

If required fields are missing:

```json
{
  "success": false,
  "message": "Please fill all the fields"
}
```

The email field is also validated using the `validator` package.

---

# Reservation Flow

The reservation process works as follows:

```text
User
  │
  ▼
React Reservation Form
  │
  │ Axios POST
  ▼
Express API
  │
  ▼
Reservation Controller
  │
  ▼
Mongoose Reservation Model
  │
  ▼
MongoDB
  │
  ▼
Success Response
  │
  ▼
React Success Page
```

---

# Database

The application uses MongoDB with the database name:

```text
RESTAURANT
```

Reservations are stored using the `Reservation` Mongoose model.

## Reservation Fields

| Field | Type | Required |
|---|---|---|
| firstName | String | Yes |
| lastName | String | Yes |
| email | String | Yes |
| phone | String | Yes |
| date | String | Yes |
| time | String | Yes |

The email address is validated before a reservation is saved.

---

# Frontend Routes

The React application currently provides these routes:

| Route | Page |
|---|---|
| `/` | Home |
| `/menu` | Menu |
| `/success` | Reservation Success |
| `/*` | Not Found |

---

# Main Frontend Sections

The Home page contains:

1. Navbar
2. Hero Section
3. About
4. Qualities
5. Menu
6. Who We Are
7. Team
8. Reservation
9. Footer

---

# Testing the API with Postman

You can test the reservation endpoint using Postman.

### Method

```text
POST
```

### URL

```text
http://localhost:4000/api/v1/reservation/send
```

### Body

Select:

```text
Body → raw → JSON
```

Use:

```json
{
  "firstName": "Kavya",
  "lastName": "Sharma",
  "email": "kavya@example.com",
  "phone": "9876543210",
  "date": "2026-10-20",
  "time": "20:00"
}
```

Click:

```text
Send
```

Expected response:

```json
{
  "success": true,
  "message": "Reservation sent successfully"
}
```

---

# Git and Environment Files

Sensitive configuration files should not be committed.

Make sure the backend environment file is ignored by Git.

Recommended:

```text
backend/config/config.env
```

should be included in `.gitignore`.

Never commit:

```text
node_modules/
.env
config.env
```

when they contain passwords, API keys, or database credentials.

For sharing the project, provide an example configuration such as:

```text
backend/config/config.env.example
```

with placeholder values:

```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

---

# Running the Complete Project

You need two terminals.

### Terminal 1 — Backend

```bash
cd backend
npm install
npm run dev
```

Backend:

```text
http://localhost:4000
```

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Then open the frontend URL in your browser.

---

# Production Build

Build the frontend:

```bash
cd frontend
npm run build
```

This creates the production files in:

```text
frontend/dist/
```

Start the backend:

```bash
cd backend
npm start
```

For deployment, update the frontend API URL and backend CORS configuration to use the deployed frontend and backend domains instead of localhost.

---

# Important Configuration Note

The current reservation component sends requests to:

```text
http://localhost:4000/api/v1/reservation/send
```

For production deployment, this should be changed to the deployed backend API URL or moved to an environment variable.

A Vite environment variable can be used, for example:

```env
VITE_API_URL=http://localhost:4000
```

Then the frontend can build the API URL from that variable.

---

# License

This project is available for educational and development purposes.

---

## Author

Restaurant Reservation Website — MERN Full-Stack Project
