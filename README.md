# 🚀 CRUD RESTful API (Users)
A simple CRUD RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing users.

## 📁 Project Structure
project/
├── controller/      # Application logic
├── middlewears/     # Validation & error handling
├── model/           # Mongoose schemas
├── routes/          # API routes
├── utlite/          # Utility functions
├── .env             # Environment variables
├── index.js         # Main entry file
├── package.json
└── package-lock.json

## ⚙️ Features / Endpoints
| Method | Endpoint        | Description |
|--------|-----------------|--------------|
| **POST**   | `/api/users`     | Create a new user |
| **GET**    | `/api/users`     | Get all users |
| **GET**    | `/api/users/:id` | Get user by ID |
| **PUT**    | `/api/users/:id` | Update user by ID |
| **DELETE** | `/api/users/:id` | Delete user by ID |

## 🧰 Used Packages
"ajv": "^8.17.1"  
"ajv-errors": "^3.0.0"  
"bcrypt": "^6.0.0"  
"dotenv": "^17.2.3"  
"errors": "^0.3.0"  
"express": "^5.1.0"  
"mongoose": "^8.18.3"  
"validator": "^13.15.15"  

## 🧪 How to Run
1. Install dependencies:  
   `npm install`  
2. Run the server:  
   `nodemon index`  
3. The API runs on:  
   `http://localhost:5000`

🧩 Example Requests & Bodies
🟢 Create a New User

Endpoint:
POST /api/users

Request Body:

{
  "name": "Ahmed",
  "age": 50
}


Example Success Response:

{
  "status": "success",
  "data": {
    "id": "1",
    "name": "Ahmed",
    "age": 50
  }
}

🟡 Update User by ID

Endpoint:
PUT /api/users/:id

Request Body:

{
  "name": "Ahmed Ali",
  "age": 51
}

🔵 Get All Users

Endpoint:
GET /api/users

Response Example:

{
  "status": "success",
  "data": [
    {
      "id": "1",
      "name": "Ahmed Ali",
      "age": 51
    }
  ]
}

🔴 Delete User

Endpoint:
DELETE /api/users/:id

Response Example:

{
  "status": "success",
  "message": "User deleted successfully"
}


## 👨‍💻 About
This project was created for training purposes to practice building RESTful APIs using **Node.js**, **Express.js**, and **MongoDB**.
