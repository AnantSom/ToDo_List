# Simple React To-Do List ✅

A clean, modern, and responsive To-Do List application built with React and Vite. This project is fully containerized with Docker for easy and consistent deployment.


*(Suggestion: Replace the link above with a screenshot of your running application!)*

---

## ✨ Key Features

-   **Add & Delete Tasks**: Easily add new tasks and remove them with a single click.
-   **Mark as Complete**: Check off tasks to mark them as completed, with a visual strikethrough effect.
-   **Persistent Storage**: Your to-do list is automatically saved in the browser's `localStorage`, so your tasks will be there when you return.
-   **Responsive UI**: The layout is clean and works well on both desktop and mobile devices.
-   **Dockerized**: Includes a multi-stage `Dockerfile` and `docker-compose.yml` to build a small, efficient production image served by Nginx.

## 🛠️ Tech Stack

-   **Frontend**: React.js, Vite
-   **Styling**: Plain CSS
-   **Deployment**: Docker, Nginx

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js, npm, and Docker installed on your machine.

-   [Node.js](https://nodejs.org/)
-   [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### 💻 Running Locally (for Development)

1.  Clone the repository:
    ```sh
    git clone https://github.com/AnantSom/ToDo_List.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd To-Do_List
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:5173](http://localhost:5173) (or the URL provided in your terminal) in your browser.

### 🐳 Running with Docker (for Production)

1.  Clone the repository and navigate into the directory.
2.  Run the production-ready container:
    ```sh
    npm run docker:prod
    ```
3.  The terminal will notify you when it's ready. Open [http://localhost:3001](http://localhost:3001) in your browser.

4.  To stop the container, run:
    ```sh
    npm run docker:stop
    ```