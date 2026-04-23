<div align="center">

# 🚗 IRBS Car Rental

### Customer UI

**IRBS** (Intelligent Rental Booking System) is a full-stack car rental web application built as a **BSc Computer Science Individual Project** — designed and developed over **4 months** with a focus on real-world architecture, clean code, and production-quality user experience.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

</div>

---

## 📌 Overview

This repository is the **Customer-facing UI** — the primary interface where users can browse the car fleet, make bookings, and manage their accounts. It communicates with a shared RESTful backend that also powers the Admin Dashboard.

The project was intentionally structured to go beyond a typical university submission — separating concerns across three independent repositories, following REST API conventions, and implementing real authentication patterns.

---

## 🔗 Related Repositories

| Repo | Role | Link |
|---|---|---|
| **Customer UI** *(this repo)* | What customers see and interact with | [my-project](https://github.com/Min-Thant794/my-project) |
| **Admin Dashboard** | Manage cars, bookings, and users | [car-rental-admin](https://github.com/Min-Thant794/car-rental-admin) |
| **Backend API** | RESTful API powering both frontends | [car-rental-backend](https://github.com/Min-Thant794/car-rental-backend) |

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Register and log in securely with JWT-based session management |
| 🚘 **Car Browsing & Search** | Explore the full fleet with search and filtering options |
| 📅 **Booking System** | Pick dates, select a car, and confirm a rental |
| 👤 **Profile Management** | View and update personal account information |
<!-- | 📱 **Responsive UI** | Fully responsive design across desktop and mobile | -->

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React.js |
| **Styling** | Tailwind CSS |
| **Authentication** | JWT (JSON Web Tokens) |
| **HTTP Client** | Axios |
| **State Management** | React Context API |
| **Backend** | Node.js + Express *(separate repo)* |
| **Database** | MongoDB *(managed via backend)* |

---

## 🗂️ Project Structure

```
my-project/
├── public/
│   └── index.html
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level page components
│   ├── context/          # Auth and global state context
│   ├── services/         # Axios API call functions
│   ├── utils/            # Helper/utility functions
│   ├── App.jsx           # Root component & route definitions
│   └── main.jsx          # Application entry point
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed before proceeding:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- The [Backend API](https://github.com/Min-Thant794/car-rental-backend) running locally

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Min-Thant794/my-project.git
cd my-project
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

> Make sure this URL matches the port your backend is running on.

**4. Start the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

| Variable | Description | Example |
|---|---|---|
| `VITE_API_BASE_URL` | Base URL of the backend REST API | `http://localhost:5000/api` |

---

## 🧭 Pages & Routes

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with featured cars |
| Login | `/login` | User login |
| Register | `/register` | New user registration |
| Cars | `/cars` | Browse and search the full fleet |
| Car Detail | `/cars/:id` | View car details and make a booking |
| My Bookings | `/bookings` | View current and past rental bookings |
| Profile | `/profile` | Manage personal account information |

---

## 🖼️ Screenshots

**Home Page**

<img src="./screenshots/homePage.png" alt="Home Page" width="100%" />

**Car Listing**

<img src="./screenshots/carListing.png" alt="Car Listing" width="100%" />

**Booking**

<img src="./screenshots/booking.png" alt="Booking Page" width="100%" />

---

## 🏗️ System Architecture

```
┌──────────────────────┐        ┌───────────────────────┐
│    Customer UI       │        │   Admin Dashboard     │
│  (React + Tailwind)  │        │  (React + Tailwind)   │
└────────┬─────────────┘        └────────────┬──────────┘
         │                                   │
         │              REST API             │
         └──────────────────┬────────────────┘
                            │
                  ┌─────────▼─────────┐
                  │    Backend API     │
                  │  (Node + Express)  │
                  └─────────┬─────────┘
                            │
                  ┌─────────▼─────────┐
                  │      MongoDB       │
                  └───────────────────┘
```

---

## 👨‍💻 About

IRBS was built over **4 months** as a BSc Computer Science Individual Project. Rather than treating it as a standard academic exercise, the aim was to simulate a real-world development workflow — separating the system into three independent repositories, designing a proper REST API, implementing JWT authentication, and delivering a polished, responsive frontend.

---

## Author

**Min Thant Tun** — [@Min-Thant794](https://github.com/Min-Thant794)

---

## 📄 License

This project was built for academic purposes. All rights reserved © Min Thant Tun.