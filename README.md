# 🚀 GraphQL Blog Frontend

A modern **React + Vite** frontend application that consumes a **GraphQL API** to display blog posts, view post details, and add comments using **Apollo Client**.

---

## ✨ Features

- 📄 List blog posts with pagination  
- 🔍 View single post details  
- 💬 View comments on each post  
- ➕ Add new comments (GraphQL mutation)  
- ⚡ Fast development with Vite  
- 🔄 Client-side routing using React Router  

---

## 🛠 Tech Stack

- **React (Vite)**
- **Apollo Client**
- **GraphQL**
- **React Router DOM**
- **CSS (custom styling)**

---

## 🌐 API Used

This project uses **GraphQLZero** (mock GraphQL API):

https://graphqlzero.almansi.me/api


> ℹ️ Note:  
> GraphQLZero is a **mock API**, so mutations (like adding comments) are **not persisted permanently**.  
> The UI updates correctly, but data may reset on refresh.

---

## 📁 Project Structure

src/
│── apollo/
│ └── client.js # Apollo Client setup
│
│── graphql/
│ ├── queries.js # GraphQL queries
│ └── mutations.js # GraphQL mutations
│
│── pages/
│ ├── Home.jsx # Post listing page
│ └── Post.jsx # Post detail + comments
│
│── App.jsx # Routes setup
│── main.jsx # App entry point
│── index.css # Global styles

---




## ▶️ How to Run This Project

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>


### 2️⃣ Go to project folder
cd graphql-blog-fresh


### 3️⃣ Install dependencies
npm install


### 4️⃣ Start development server
npm run dev


### 5️⃣ Open in browser
http://localhost:5173



🧠 What I Learned

How to integrate Apollo Client with React

Writing GraphQL queries & mutations

Handling loading and error states

Using React Router for dynamic routes

Working with a mock GraphQL API

Structuring a scalable frontend project




## 🎥 Project Demo Video

▶️ Click here to watch demo video:  




https://github.com/user-attachments/assets/d7911d44-2f6e-4e60-80bc-27d7ce6ecfcc



