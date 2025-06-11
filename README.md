# Backend Assignment

## Project: Backend Developer Task (Node.js + Express + MongoDB)

This is a simple REST API project built with Node.js, Express, MongoDB and Mongoose, following layered architecture.

---

## Features

- User registration and login (no authentication)
- CRUD operations for Product model
- Layered architecture (Controller, Service, Repository, Model)
- Error handling and ObjectId validation
- Clean API responses

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemon (for development)

---

## Installation

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd future-code-technology-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
```

Make sure MongoDB is running locally.

### 4️⃣ Run the project

```bash
nodemon src/index.js
```

---

## API Endpoints

### User APIs (`/api/user`)

#### Register User

- **URL:** `/api/user/register`
- **Method:** `POST`
- **Request Body:**

```json
{
  "username": "testuser",
  "password": "testpassword",
  "email": "testemail@gmail.com", 
  "phoneNumber": "0753521146"
}
```

- **Success Response:**

```json
{
  "message": "User registered successfully"
}
```

#### Login User

- **URL:** `/api/user/login`
- **Method:** `POST`
- **Request Body:**

```json
{
  "username": "testuser",
  "password": "testpassword"
}
```

- **Success Response:**

```json
{
  "message": "Login successful"
}
```

---

### Product APIs (`/api/product`)

#### Create Product

- **URL:** `/api/product/create`
- **Method:** `POST`
- **Request Body:**

```json
{
  "name": "Product Name",
  "price": 100,
  "quantity": 50
}
```

- **Success Response:**

```json
{
  "message": "Product created successfully",
  "product": { ... }
}
```

#### Get All Products

- **URL:** `/api/product/getAll`
- **Method:** `GET`

- **Success Response:**

```json
[
  {
    "_id": "6669a257e85f44c9f7c4b7d3",
    "name": "Product Name",
    "price": 100,
    "quantity": 50
  }
]
```

#### Get Product By ID

- **URL:** `/api/product/getById/:id`
- **Method:** `GET`

- **Success Response:**

```json
{
  "_id": "6669a257e85f44c9f7c4b7d3",
  "name": "Product Name",
  "price": 100,
  "quantity": 50
}
```

- **Error Response (invalid ID):**

```json
{
  "error": "Invalid product Id format"
}
```

- **Error Response (not found):**

```json
{
  "message": "Product not found"
}
```

#### Update Product

- **URL:** `/api/product/update/:id`
- **Method:** `PUT`
- **Request Body:**

```json
{
  "name": "Updated Name",
  "price": 200,
  "quantity": 25
}
```

- **Success Response:**

```json
{
  "message": "Product updated successfully",
  "product": { ... }
}
```

#### Delete Product

- **URL:** `/api/product/delete/:id`
- **Method:** `DELETE`

- **Success Response:**

```json
{
  "message": "Product deleted successfully"
}
