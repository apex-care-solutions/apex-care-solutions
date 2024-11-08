# ApexCare Solutions

ApexCare Solutions is a platform designed to connect users seeking maintenance and support services with skilled technicians. This application enables real-time communication and job tracking for job requests initiated by an AI driven chatbot ensuring users receive efficient service based on job urgency and type.

## Project Architecture

ApexCare follows a multitier architecture, with each tier serving a specific purpose and enhancing modularity:

-   **Database Layer**: A PostgreSQL database that securely stores user, job, and technician data.
-   **Backend (Main Web Application)**: Next.js App that handles application logic, manages data interactions, and connects with external services.
-   **Frontend (Main Web Application)**: A React web app that serves as the primary interface for users to initiate service requests, manage communications, and track job statuses.
-   **Chat Microservice**: An isolated chat service built using Express and Socket.IO. This microservice manages real-time messaging between the user and chat bot, facilitating fast and reliable communication. The chat microservice is isolated to improve scalability and maintainability, and it communicates with the main application through a dedicated API.

The entire application is containerized using Docker, ensuring a consistent environment for development and deployment. Docker Compose is used to orchestrate the containers, simplifying setup and resource management.

## Features

-   **User and Technician Interaction**: Provides a streamlined way for users to request services and communicate with assigned technicians.
-   **Real-Time Chat**: Enables prompt, real-time communication between the users and the chatbot through the chat microservice logging service requests.
-   **Role-Based Access Control**: Ensures different levels of access based on user roles (e.g., user, technician, admin).

## Getting Started

To run the ApexCare application locally, follow these steps:

### Prerequisites

-   Docker and Docker Compose installed on your machine.
-   An `.env` file for each service containing the necessary environment variables.

### Setting Up Environment Variables

In the `web/app/.env` file (for the main app), define your environment variables:

```plaintext
# Main app environment variables
NODE_ENV=production
PORT=3000
HOST=0.0.0.0
DATABASE_URL=postgres://apex_admin:apex_admin@postgres:5432/apex_care_db
CHAT_SERVICE_URL=http://localhost:3333
```

In the `web/services/chat/.env` file (for the chat microservice), ensure the following environment variable is set:

```plaintext
# Chat service environment variables
NODE_ENV=production
PORT=3333
HOST=0.0.0.0
APEX_CARE_API_BASE_URL=http://app:3000/api/v1
OPENAI_SECRET=<your_openai_secret_here>
```

### Docker Compose Setup

With environment variables in place, start the application using Docker Compose:

```bash
docker-compose up --build
```

This command builds and runs the following services as defined in the `docker-compose.yml` file:

1. **postgres** - PostgreSQL database.
2. **app** - Main application server (Next.js).
3. **service-chat** - Chat microservice (Express + Socket.IO).

Docker volumes are set up to persist database data (postgres_data) and maintain code consistency.

## Frontend User Guide

Here’s a quick guide on how the frontend works, with screenshots to illustrate each step.

### 1. Landing Page

The landing page introduces the platform, offering options to log in, sign up, or learn more about the services offered.

![Landing Page](docs/reference/landing-page.png)

### 2. Authentication Page

Users can log in or register to access the platform. This page provides options for account recovery as well.

![Login and Registration Screen](docs/reference/auth-page.png)

### 3. Home Page

The home page displays an overview of available features for users, including access to job requests, chat, and subscription information.

![Home Page](docs/reference/home-page-1.png)

### 4. Chat Page

Users interact with an AI chatbot through WebSockets. The chatbot gathers information and, when enough details are provided, prompts the user to request a specific service with a designated urgency level.

![Chat Page](docs/reference/chat-page-1.png)

### 5. Jobs Page

The Jobs Page acts as the user’s dashboard, displaying ongoing, completed, and pending job requests. Users can also initiate new service requests from here.

![Jobs Page](docs/reference/jobs-page.png)

### 6. Technician Signup Page

Technicians can join the platform by selecting their skills and services on this page, allowing them to specify the types of tasks they are qualified to perform.

![Technician Sign Up Page](docs/reference/tech-signup-page.png)

### 7. Technician Home Page

The Technician Home Page displays active job requests.

![Technician Home Page](docs/reference/tech-home-page-1.png)

This page also displays job requests, allowing technicians to claim jobs and view relevant request details

![Technician Home Page](docs/reference/tech-home-page-2.png)

### 8. Technician Job Request Page

Technicians can view detailed information about each job request and manage the job’s status directly from this page.

![Technician Jobs Page](docs/reference/tech-jobs-page-1.png)

_Access the main web app at http://localhost:3000._
