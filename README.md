# IntervuAi - AI-Powered Interview Mastery Platform

## Description

IntervuAi is an AI-powered platform designed to help students practice for job interviews. Utilizing the OpenAI API, it simulates realistic interview scenarios, provides personalized feedback, and offers valuable insights to improve interview skills.

## Tech Stack

- React with TypeScript (Frontend)
- Tailwind CSS (Styling)
- OpenAI API (AI Integration)
- Java Spring Boot (Backend)
- MySQL (Database)

## Prerequisites

- NodeJS
- npm or yarn
- Java 8 or higher
- MySQL Server

## Installation

```bash
https://github.com/geniusuraj/IntervuAi.git
cd IntervuAi

# Frontend setup
cd frontend
npm install
npm start

# Backend setup
# Navigate to the backend directory
# Update MySQL credentials in `application.properties`
# Build and run the Spring Boot project
```
## Spring Boot Project Configuration
Add the following lines to your `application.properties` file to configure the Spring Boot backend:
```base
server.port = 5050
spring.datasource.driver=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/your-database-name
spring.datasource.username= Your Username
spring.datasource.password= Your Password
spring.jpa.hibernate.ddl-auto=update
```
## Usage
- Choose the type of interview (MERN, Node, Java).
- Interact with the AI-based interviewer.
- Receive instant feedback.

## Team Members

- [Suraj Kumar Sharma](https://github.com/geniusuraj)
- [Rutwik Kumbhar](https://github.com/fw23-0277)
- [Moumita Sarkar](https://github.com/MouS0926)
- [Ramanjeet Singh](https://github.com/gzbsingh)
- [Mohnish Vishwakarma](https://github.com/mohnish201)

## Hackathon Rules
- All work is original.
- Followed the Code of Conduct.
- A live demo video is available.

## Entity-Relationship Diagram

![Dashboard](https://github.com/geniusuraj/IntervuAi/blob/main/intervuai.png)

![Entity-Relationship Diagram](https://github.com/geniusuraj/IntervuAi/blob/main/Backend/ER-Daigram.png)
