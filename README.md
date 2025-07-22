# Mustafa Nahsan - Personal Portfolio Website ✨

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

This is the repository for my personal portfolio website, a modern and interactive single-page application designed to showcase my skills, projects, and professional experience as a software developer. The site is built to provide a seamless and engaging user experience.

---

## 📝 Table of Contents

- [✨ Core Features](#-core-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Setup and Launch](#-setup-and-launch)
- [🔑 Environment Variables (.env)](#-environment-variables-env)
- [🤝 Contributing](#-contributing)

---

## ✨ Core Features

-   **Interactive Home Page:** A captivating landing page with a dynamic canvas animation that reacts to user interaction.
-   **Detailed About Section:** A comprehensive overview of my skills, expertise, and professional journey presented in a timeline format.
-   **Services Overview:** A clear presentation of the services I offer, including Web Development, Mobile App Development, and UI/UX Design.
-   **Filterable Portfolio Gallery:** An interactive gallery showcasing my projects, which can be filtered by category (Web, Mobile, UI/UX, etc.).
-   **Firebase-Powered Contact Form:** A fully functional contact form that securely stores user messages in a Firebase Firestore database.
-   **Smooth Animations & Transitions:** Enriched user experience with fluid animations and page transitions powered by `Framer Motion`.
-   **Fully Responsive Design:** A clean and modern interface that is fully responsive and optimized for all devices, from mobile to desktop.

---

## 🛠️ Tech Stack

### Frontend

-   **React:** The core library for building the user interface.
-   **Vite:** A next-generation frontend tooling for a faster and leaner development experience.
-   **React Router DOM:** For handling client-side routing and navigation between pages.
-   **Tailwind CSS:** A utility-first CSS framework for rapid and custom UI development.
-   **Framer Motion:** For creating beautiful and fluid animations.
-   **Firebase (Client SDK):** Used for integrating the Firestore database to handle contact form submissions.
-   **React Intersection Observer:** To trigger animations as elements scroll into view.

---

## 📂 Project Structure

The project follows a modular and organized structure, typical for modern React applications.

```
/
├── public/
│   └── assets/
│       └── img/          # Project images and assets
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, FaqItem, etc.)
│   ├── pages/            # Page components (Home, About, Portfolio, etc.)
│   ├── App.jsx           # Main application component with routing
│   ├── firebaseConfig.js # Firebase configuration
│   ├── index.css         # Global styles and Tailwind CSS setup
│   └── main.jsx          # Application entry point
├── .env.example          # Example environment variables
└── package.json
```

---

## 🚀 Setup and Launch

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.x or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the project root. Copy the contents of `.env.example` and fill in your own Firebase project credentials. (See the [Environment Variables](#-environment-variables-env) section for details.)

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be running on `http://localhost:5173`.

---

## 🔑 Environment Variables (.env)

To run this project, you need to create a `.env.local` file in the root directory and add the following configuration variables with your own Firebase project details.

```env
# Firebase Client SDK - Fill these with your own project credentials
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=G-...
```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to improve the project, please follow these steps:

1.  **Fork** this repository.
2.  Create a new feature branch (`git checkout -b feature/new-feature`).
3.  **Commit** your changes (`git commit -m 'feat: Add some new feature'`).
4.  **Push** to the branch (`git push origin feature/new-feature`).
5.  Open a **Pull Request**.


![image](https://github.com/user-attachments/assets/e94d9945-89d8-4352-8d89-1a8fe56fd82e)
![image](https://github.com/user-attachments/assets/bfcf4341-e789-4457-8aa3-59dc426c02ad)
![image](https://github.com/user-attachments/assets/d65a65f8-7078-47e0-aa60-11c2d85e6011)
![image](https://github.com/user-attachments/assets/4c8c24b3-796b-4e6b-a58b-6869764a9e58)
![image](https://github.com/user-attachments/assets/6c565669-791b-4768-824b-01090bbe5132)
