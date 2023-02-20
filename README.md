# ToDo App

## Description

This is a ToDo list application built with Express, React, MongoDB, and JWT authentication.

## Installation

Clone this repository to your local machine.
Install dependencies with `npm install`.

## Usage

To start the application, run `npm start`. This will start the server and client concurrently.

&nbsp;

# Backend/Server

### Dependencies

- bcrypt: ^5.1.0
- cookie-parser: ~1.4.4
- cors: ^2.8.5
- debug: ~2.6.9
- dotenv: ^16.0.3
- express: ~4.16.1
- jsonwebtoken: ^9.0.0
- mongoose: ^6.9.2
- morgan: ~1.9.1

### Dev Dependencies

- concurrently: ^7.6.0

&nbsp;

# Frontend/Client

### Dependencies

The client has the following dependencies:

- "@testing-library/jest-dom": "^5.16.5"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "bootstrap": "^5.2.3"
- "react": "^18.2.0"
- "react-bootstrap": "^2.7.2"
- "react-dom": "^18.2.0"
- "react-router-dom": "^6.8.1"
- "react-scripts": "5.0.1"
- "web-vitals": "^2.1.4"

These packages are installed automatically when you run npm install.

### ESLint Configuration

The client uses the default ESLint configuration for React applications created with create-react-app. The configuration can be found in the eslintConfig section of package.json.

### Browserslist

The browserslist configuration is used to specify which browsers the application should support. The configuration is split into two parts: production and development. The production configuration specifies which browsers should be supported in production builds, while the development configuration specifies which browsers should be supported during development.
