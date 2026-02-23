# FSAD-PS02 TribalCraft Full-Stack Project

This repository now contains a **clear, runnable full-stack implementation** for:

> **Promote Value-Added Handicrafts to Support Tribal People**

Tech stack:
- **Frontend:** React + Vite + React Router + Axios
- **Backend:** Spring Boot + JPA + H2 (in-memory DB)

---

## 1) Project Structure

```text
/backend   -> Spring Boot REST API
/frontend  -> React client app
```

---

## 2) Features Implemented

### Backend modules
- Auth module (`/api/auth/register`, `/api/auth/login`)
- Product module (`/api/products` CRUD + search)
- Order module (`/api/orders` place/list)
- Basic role model (`ADMIN`, `ARTISAN`, `CUSTOMER`, `CONSULTANT`)

### Frontend modules
- Home page
- Product listing with search
- Add product form (artisan workflow)
- Place order + list orders
- Register and login pages

---

## 3) Step-by-Step: Run the Backend

1. Go to backend folder:
   ```bash
   cd backend
   ```
2. Start Spring Boot app:
   ```bash
   ./mvnw spring-boot:run
   ```
   or (if Maven wrapper is unavailable):
   ```bash
   mvn spring-boot:run
   ```
3. Backend starts on:
   - `http://localhost:8080`
4. H2 console (optional):
   - `http://localhost:8080/h2-console`

---

## 4) Step-by-Step: Run the Frontend

1. Open a new terminal and go to frontend:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Vite dev server:
   ```bash
   npm run dev
   ```
4. Open:
   - `http://localhost:5173`

---

## 5) API Quick Examples

### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "fullName": "Demo Artisan",
  "email": "artisan@demo.com",
  "password": "123456",
  "role": "ARTISAN"
}
```

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "artisan@demo.com",
  "password": "123456"
}
```

### Create product
```http
POST /api/products
Content-Type: application/json

{
  "name": "Bamboo Basket",
  "description": "Handwoven tribal bamboo basket",
  "price": 499,
  "imageUrl": "https://images.unsplash.com/photo-1616628182509-6d37de4f2fe7",
  "artisanName": "Demo Artisan"
}
```

### Place order
```http
POST /api/orders
Content-Type: application/json

{
  "customerName": "Anita",
  "customerEmail": "anita@email.com",
  "productId": 1,
  "quantity": 2
}
```

---

## 6) Next Improvements (Suggested)

- Add JWT-based authentication and password hashing
- Add role-based route guards in frontend
- Add image upload (cloud/local storage)
- Add payment gateway integration
- Move from H2 to MySQL/PostgreSQL for production
