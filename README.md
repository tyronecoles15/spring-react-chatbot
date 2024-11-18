README for Spring Boot and ReactJS OpenAI Chatbot

Project Overview

This project is a Spring Boot and ReactJS-based OpenAI chatbot application. The chatbot allows users to interact with OpenAI servers through a web-based interface, with support for real-time messaging, chat history storage, and authentication using Firebase.

Features

1. Chatbot Interaction:
   - Users can enter text prompts and receive AI-generated responses from OpenAI.

2. Chat History:
   - Conversations are stored in Firebase for future reference.
   - Users can view previous chats and access individual conversation details.

3. Firebase Authentication:
   - User authentication and secure access to chat features.
   - Login and signup functionality included.

4. Modern Web UI:
   - Built with ReactJS for a dynamic and responsive user experience.

5. Backend Logic:
   - Spring Boot handles API requests, processes OpenAI prompts, and manages chat data.

Technologies Used

Frontend
- ReactJS:
  - UI development.
  - Components for chat input, chat history, and login/signup forms.
- Firebase:
  - Authentication and chat history storage.
Backend
- Spring Boot:
  - RESTful APIs for managing chat interactions and user sessions.
- OpenAI API:
  - Integration for AI-generated responses.

Getting Started

Prerequisites

- Java (JDK 17 or higher)
- Node.js (v16 or higher)
- Maven (for Spring Boot)
- npm or yarn (for ReactJS)
- Firebase project set up for authentication and database storage

Backend Setup

1. Clone the repository.
2. Obtain an OpenAI API key and add it to your application.yaml or application.properties file.
3. Run the application.

Frontend Setup

1. Navigate to the ReactJS folder.
2. Install dependencies using the command 'npm install'
3. Set up Firebase
   - Replace the Firebase configuration in `firebase.js` with your own project credentials.
4. Run the application

Database Setup

Firebase is used as the database for storing chat history and user authentication. Ensure that your Firebase project is properly configured to store chat conversations under a suitable collection.

