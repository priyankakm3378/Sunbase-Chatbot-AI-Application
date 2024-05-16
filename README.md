# Sunbase-Chatbot-AI-Application

# AI Chatbot

This project is a basic RAG model AI chatbot that allows users to upload text files and interact with the chatbot using a simple web interface.

## Features
- Upload text files and process them into embeddings.
- Store embeddings in Zilliz Cloud.
- Chat interface to interact with the chatbot using prompt engineering.

## Setup Instructions
1. Clone the repository.
2. Set up Zilliz Cloud and obtain necessary credentials.
3. Configure the backend by updating `application.properties`.
4. Run the backend: `mvn spring-boot:run`.
5. Run the frontend: `npm start`.

## Technologies Used
- Java with Spring Boot
- React
- Zilliz Cloud for vector database
- OpenAI/Hugging Face for embedding model
