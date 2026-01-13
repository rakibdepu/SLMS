# 🏛️ Smart Library Managment System

## 🛠️ Installation

### 1. Clone the repository

Clone the project repository to your local machine using the following command:

```bash
git clone https://github.com/KaranMehta1806/Library-Management.git
```

### 2. Install Dependencies
Navigate to the frontend and backend directories, and install dependencies:

#### Backend (API)

##### 1. Navigate to the api directory:
```bash
cd backend
```

##### 2. Install backend dependencies:
```bash
npm install
```
#### Frontend (Client)

##### 1. Navigate to the client directory:
```bash
cd frontend
```
##### 2. Install frontend dependencies:
```bash
npm install
```
---

### 3. Set Up Environment Variables
Create a .env file in api and add the following environment variables:

####  BACKEND .env file
```bash
EMAIL_USER=your_email_address (Not Necessary)
EMAIL_PASS=your_email_password (Not Necessary)
EMAIL_SERVICE=your_email_service (Not Necessary)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret

```

#### FRONTEND .env file
```bash
VITE_BACKEND_URL=http://localhost:5000

```
---

### 4. Start the Development Server
Once the dependencies are installed and the .env file is set up, you can start the development server with the following command:

#### Backend
Start the backend server by navigating to the backend directory and running the following command:

```bash
npx nodemon index.js
```
#### Frontend
Start the frontend server by navigating to the frontend directory and running the following command:

```bash
npm run dev
```
---




