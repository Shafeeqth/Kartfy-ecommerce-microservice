
# CartFy User Microservice

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Description
The CartFy User Microservice is responsible for managing user-related operations in the CartFy system. This includes user registration, authentication, profile management, and more. The microservice is built using TypeScript, Node.js, and TypeORM, following clean architecture and SOLID principles.

## Features
- **User Registration**: Register new users with email and password.
- **User Authentication**: Authenticate users and issue JWT tokens.
- **Profile Management**: Update user profiles and manage user information.
- **Password Management**: Change and reset user passwords.
- **User Blocking**: Block and unblock users.
- **Transaction Management**: Ensure atomic operations using transactions.

## Installation
Follow these steps to install and set up the CartFy User Microservice.

```bash
# Clone the repository
git clone https://github.com/yourusername/cartfy-user-microservice.git

# Navigate to the project directory
cd cartfy-user-microservice

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit the .env file with your configuration

# Run the application
npm start
```

## Usage
Instructions on how to use the CartFy User Microservice, including code examples and API requests.

```bash
# Start the application
npm run start

# Example API request to register a new user
curl -X POST http://localhost:3000/api/users/register -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
```

## API Endpoints
A list of available API endpoints with descriptions and examples.

### User Endpoints
- **POST /api/users/register**: Register a new user
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **POST /api/users/login**: Authenticate a user
  - Request Body:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt-token"
    }
    ```

- **GET /api/users/:id**: Get user by ID
  - Response:
    ```json
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **PUT /api/users/:id**: Update user profile
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```
  - Response:
    ```json
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **POST /api/users/change-password**: Change user password
  - Request Body:
    ```json
    {
      "userId": "1",
      "currentPassword": "password123",
      "newPassword": "newpassword123"
    }
    ```
  - Response:
    ```json
    {
      "message": "Password changed successfully"
    }
    ```

- **POST /api/users/block**: Block a user
  - Request Body:
    ```json
    {
      "userId": "1"
    }
    ```
  - Response:
    ```json
    {
      "message": "User blocked successfully"
    }
    ```

## Contributing
Guidelines for contributing to the CartFy User Microservice.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/cartfy-user-microservice](https://github.com/yourusername/cartfy-user-microservice)
```
 