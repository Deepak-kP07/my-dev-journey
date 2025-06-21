# Smart Blog - A Full-Stack React & Firebase Application

Welcome to Smart Blog, a modern, full-stack blogging platform built with the power of React and the comprehensive Firebase suite. This project serves as a demonstration of building a complete, secure, and feature-rich web application from development to deployment.

## ✨ Features

*   **Full CRUD Functionality:** Create, Read, Update, and Delete blog posts.
*   **Secure Authentication:** Robust user authentication system supporting both Email/Password and Google Sign-In.
*   **Protected Routes:** A dedicated, secure profile/dashboard area for authenticated users to manage their own content.
*   **Real-time Database:** Built on Cloud Firestore for instant data synchronization.
*   **Modern Frontend:** A sleek, responsive UI built with React, Vite, and styled with Tailwind CSS.
*   **Centralized State Management:** Predictable state management powered by Redux Toolkit.
*   **Professional UX:** Non-blocking toast notifications for user feedback using React-Toastify.
*   **Production Ready:** Deployed globally with Firebase Hosting, including custom domain support.

## 🛠️ Tech Stack

### Frontend
*   **Framework:** [React](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/)

### Backend & Infrastructure
*   **Platform:** [Firebase](https://firebase.google.com/)
*   **Authentication:** Firebase Authentication
*   **Database:** Cloud Firestore
*   **Hosting:** Firebase Hosting

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
*   A Firebase project. You can create one for free at the [Firebase Console](https://console.firebase.google.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/smart-blog.git
    cd smart-blog
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Firebase configuration:**
    *   In the Firebase Console, go to your Project Settings and create a new Web App.
    *   Copy the `firebaseConfig` object.
    *   Create a `.env` file in the root of the project.
    *   Add your Firebase configuration details to the `.env` file. **Important:** For Vite, all environment variable names must start with `VITE_`.

    ```env
    # .env
    VITE_API_KEY="your-api-key"
    VITE_AUTH_DOMAIN="your-auth-domain"
    VITE_PROJECT_ID="your-project-id"
    VITE_STORAGE_BUCKET="your-storage-bucket"
    VITE_MESSAGING_SENDER_ID="your-messaging-sender-id"
    VITE_APP_ID="your-app-id"
    ```

4.  **Configure Firebase in the app:**
    *   Ensure your `src/firebase.js` file is correctly reading these environment variables:
    ```javascript
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY,
      // ... and so on
    };
    ```

5.  **Enable Firebase Services:**
    *   In the Firebase Console, enable **Authentication** (with Email/Password and Google providers).
    *   Set up **Cloud Firestore** (start in test mode for local development).

### Running the Development Server

To view the application in your browser and take advantage of hot-reloading:

```bash
npm run dev
