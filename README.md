# Online-Event-Management

## Project Overview

EventMapper is a full-stack web application designed to streamline event management and discovery. It provides a user-friendly interface for listing, finding, and filtering events with the added convenience of a map-based visualization.

## Key Features

*   **User Authentication:** Secure sign-up, login, and password recovery with OTP verification.
*   **Event Listing:** Comprehensive display of events with details like type, date, location, and description.
*   **Interactive Map:** Map integration (using Leaflet/Google Maps API) to visually display event locations.
*   **Filtering:** Robust filter options for events based on date, type, and location, both in list and map views.
*   **(Future) Event Registration & Ticketing:** Planned implementation of event registration and online ticketing functionality.

## Tech Stack

*   **Frontend:**
    *   React
    *   Leaflet (or Google Maps API)
    *   CSS Framework (e.g., Tailwind CSS)
*   **Backend:**
    *   Node.js
    *   Express.js
    *   MongoDB (or PostgreSQL)
*   **Authentication:**
    *   JSON Web Tokens (JWT)
*   **Other Tools:**
    *   Git (for version control)

## Getting Started

1.  **Prerequisites:**
    *   Node.js and npm installed on your machine
    *   MongoDB (or PostgreSQL) instance running
2.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<your_username>/EventMapper.git
    ```
3.  **Backend Setup:**
    *   Navigate to the `backend` directory.
    *   Install dependencies: `npm install`
    *   Create a `.env` file to store your environment variables (e.g., database connection string, JWT secret).
    *   Start the server: `npm start`
4.  **Frontend Setup:**
    *   Navigate to the `frontend` directory.
    *   Install dependencies: `npm install`
    *   Start the development server: `npm start`

## Project Structure

EventMapper/

├── backend/                # Backend source code (Node.js, Express.js)

│     ├── models/             # Database models (Mongoose schemas)

│     ├── routes/             # API routes

│      ├── config/             # Configuration files

│   └── ...


├── frontend/               # Frontend source code (React)  
│   ├── components/       # React components

│   ├── services/         # API service functions

│   └── ...


├── .env                  # Environment variables (backend)

├── .gitignore            # Files/folders to ignore by Git

└── README.md            # This file!
