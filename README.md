# Realtime Chat Web Application

## Project Overview

This project is a realtime chat web application designed to facilitate instant communication between users. The application supports user authentication, real-time messaging, and group chats, with a focus on scalability, security, and a seamless user experience.

## Key Features

- **User Authentication:** Secure login and registration with multi-factor authentication (MFA).
- **Real-Time Messaging:** Instant communication using WebSocket technology, with support for text, emojis, and file sharing.
- **Group Chats:** Users can create and join group chats, with options for private or public groups.
- **Scalability:** Built to handle a large number of concurrent users through distributed server architecture.

## Technologies

- **Frontend:**
  - HTML, CSS, JavaScript (React.js)
  - WebSocket for real-time communication

- **Backend:**
  - Node.js with Express.js framework
  - Redis for message brokering and caching
  - MongoDB for data storage

- **Deployment:**
  - Docker for containerization
  - CI/CD pipelines using GitHub Actions
  - Hosted on DigitalOcean

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amine-zzr/real-time_ChatApp.git
   cd real-time_ChatApp

2. **Install dependencies:**
   ```bash
   npm install

3. **Start the application:**
   ```bash
   npm start

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.


## Project Structure
```bash
/chat-app
│
├── /backend
│   ├── /controllers
│   │   ├── authController.js        // Handles user authentication logic
│   │   └── chatController.js        // Handles chat message logic
│   ├── /models
│   │   └── userModel.js             // User model for registration and login
│   ├── /routes
│   │   ├── authRoutes.js            // Routes for authentication (register, login)
│   │   └── chatRoutes.js            // Routes for chat interactions
│   ├── /middlewares
│   │   └── authMiddleware.js        // Middleware for protecting chat routes
│   ├── /utils
│   │   └── tokenUtils.js            // JWT token creation/verification
│   ├── server.js                    // Main server entry point
│   └── socket.js                    // Socket.IO server handling
│
├── /frontend
│   ├── /public
│   │   └── index.html               // Frontend template for chat and login
│   ├── /css
│   │   └── styles.css               // Styling for chat and login forms
│   ├── /js
│   │   ├── chat.js                  // Handles real-time chat logic in frontend
│   │   └── auth.js                  // Handles registration/login in frontend
│   └── /images                      // Place to store images for the future post feature
│
├── /config
│   ├── database.js                  // MongoDB connection setup
│   └── env.js                       // Environment variables (e.g., PORT, DB_URI)
│
├── package.json                      // NPM dependencies
└── README.md                         // Project documentation
```
