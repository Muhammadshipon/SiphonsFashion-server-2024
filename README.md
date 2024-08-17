# Backend - SiphonsFashion-server-2024

This is the backend application for the Siphons Fashion project, built with Node.js and Express.js. It connects to a MongoDB database and provides APIs for product management and reviews.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/siphons-fashion-backend.git
2. **Navigate to the project directory:**
   ```bash
   cd Siphons-Fashion-server-2024
3. **Install the dependencies:**
   ```bash
   npm install

## Usage
1.  **Start the development server:**
   ```bash
   npm start
- This will start the server on http://localhost:3000 by default.

2. **Environment Variables:**
   ```bash
  PORT=3000
USER_NAME=your-mongodb-username
USER_PASS=your-mongodb-password

## API Endpoints:

- GET /products - Fetch all products
- GET /reviews - Fetch all reviews


Certainly! Here’s a template for a README.md file tailored for a server-side project using Node.js, Express, and MongoDB. This template assumes you are using a structure similar to what you described previously.

markdown
Copy code
# Backend - Siphons Fashion

This is the backend application for the Siphons Fashion project, built with Node.js and Express.js. It connects to a MongoDB database and provides APIs for product management and reviews.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/siphons-fashion-backend.git
Navigate to the project directory:
bash
Copy code
cd siphons-fashion-backend
Install the dependencies:
bash
Copy code
npm install
Usage
Start the development server:

bash
Copy code
npm start
This will start the server on http://localhost:3000 by default.

Environment Variables:
Make sure to create a .env file in the root directory with the following variables:

env
Copy code
PORT=3000
USER_NAME=your-mongodb-username
USER_PASS=your-mongodb-password
API Endpoints:

GET /products - Fetch all products
GET /reviews - Fetch all reviews


## Features
- Pagination: Efficiently load products with pagination.
- Search: Search products by name.
- Categorization: Filter products by category, brand, and price range.
- Sorting: Sort products by price and date.
- Authentication: Google and email/password authentication via Firebase.

