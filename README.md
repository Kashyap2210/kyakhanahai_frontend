# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Frontend of Kyakhanahai.com

This is the **frontend** part of the [kyakhanahai](#), a MERN (MongoDB, Express, React, Node.js) stack project. The website helps users generate random meals from a list of saved dishes. The frontend is built using **React** and various other packages to create a modern, responsive, and interactive web application.

## Table of Contents

- Project Overview
- Demo
- Features
- Tech Stack
- Getting Started
  - Prerequisites
  - Installation
  - Running the Application
- Environment Variables
- Project Structure
- Available Scripts
- Styling
- Testing
- Contributing
- License

## Project Overview

The frontend allows users to:

- Register and log in to save their favorite dishes.
- View, add, edit, and delete dishes.
- Generate a random meal.
- Place an order directly through Zomato's integration.
- View nearby restaurants using Google Maps API.

The project focuses on simplicity, responsiveness, and user experience.

## Demo

You can find a live demo of the project [here](https://kyakhanahai-frontend.onrender.com).

## Features

- User authentication (Login/Signup) using JWT tokens
- Image Upload During Signup
- Create, read, update, and delete (CRUD) operations on saved dishes
- Random meal generator
- Zomato integration for direct orders
- Google Maps integration to show nearby restaurants
- AI-Powered Dish Suggestions (Gemini API Integration)
- Fully responsive design using Material UI and Tailwind CSS

## Tech Stack

**React.js** – For building the user interface.
**React Router** – For handling routing and navigation between pages.
**Material UI** – For responsive and customizable UI components.
**Tailwind CSS** – For fast, utility-first CSS styling.
**Axios** – For making HTTP requests to communicate with the backend API.
**Google Maps API** – For displaying nearby restaurants based on the user’s location.
**Gemini API** – For AI-powered dish suggestions based on user-provided ingredients.
**Styled Components** – For writing component-level CSS using JavaScript.
**EmailJS** – For sending emails directly from the frontend.
**JWT Decode** – For decoding and managing JSON Web Tokens in user authentication.
**HTML React Parser** – For safely parsing and rendering HTML content within React components.
**Marked** – For parsing and rendering markdown content.
**Context API** – For managing global state across the application.
**React Hooks** – For managing component state and lifecycle.
**Vite** – For fast and efficient development and build processes.
**ESLint & Prettier** – For ensuring code consistency, linting, and formatting.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** as the package manager
- Backend service for APIs (you can find the backend of this project [here](#link-to-backend-repo))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/kyakhanahai-frontend.git
   cd kyakhanahai-frontend
   ```

2. Install dependencies:

npm install

# or

yarn install

### Running the Application

npm start

# or

yarn start

### Open your browser and navigate to http://localhost:3000 to view the frontend.

### Enviorment Variables

Before running the project, ensure you have a .env file in the root directory of your frontend project. Below is a sample .env.example:

REACT_APP_API_URL=http://localhost:5000 # Backend API URL
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_ZOMATO_API_KEY=your_zomato_api_key

### Project Structure(Frontend)

Frontend
├── public
├── src
│ ├── assets # Static assets (images, etc.)
│ ├── components # Reusable React components
│ ├── context # Global state using React Context API
│ ├── main.jsx # Root component
│ ├── App.css # Styling
└── .env
└── .gitignore
└── index.html
└── package.json
└── package-lock.json
└── tailwind.config.js
└── vite.config.js

### Key files

src/components/: Contains reusable components like Navbar, Footer, DishCard, etc.
src/context/: Contains state management using React Context API.

Your README file is quite thorough and well-organized! It covers most of the essential aspects of the project. Here are a few suggestions to enhance clarity and completeness:

Project Overview:

You might want to add a brief introduction to the project, its purpose, and its target audience. This can help users quickly understand the goal of the project.
Demo:

It’s great that you’ve included a link to a live demo. Ensure it is accessible and up-to-date.
Tech Stack:

Mentioning specific versions of libraries and tools can be helpful. For instance, specifying the versions of React, Material UI, and Tailwind CSS used.
Environment Variables:

Consider adding a note about securing API keys and sensitive information in production environments.
Project Structure:

It might be helpful to briefly describe the purpose of each directory or file listed in the project structure.
Available Scripts:

Include a section describing the available npm or yarn scripts in the package.json file, such as start, build, test, etc.
Styling:

You might want to mention any specific styling conventions or methodologies used in your project.
Testing:

If you have a testing strategy or tools in place (like Jest or React Testing Library), include that information.
Contributing:

If you’re open to contributions, include guidelines on how to contribute, file issues, or submit pull requests.
License:

Specify the license under which the project is distributed to clarify usage rights.
Here’s a refined version of your README with these suggestions:

Kyakhanahai.com - Frontend
This repository contains the frontend of Kyakhanahai, a MERN stack project designed to help users generate random meals from a list of saved dishes. Built with React and modern web technologies, the application offers a responsive and interactive user experience.

Table of Contents
Project Overview
Demo
Features
Tech Stack
Getting Started
Prerequisites
Installation
Running the Application
Environment Variables
Project Structure
Available Scripts
Styling
Contributing

### Project Overview

Kyakhanahai.com enables users to:

- Register and log in to save their favorite dishes.
- View, add, edit, and delete dishes.
- Generate a random meal.
- Place an order via Zomato integration.
- View nearby restaurants using Google Maps API.
- Demo
- Check out the live demo here.

### Features

- User authentication with JWT tokens
- Image upload during signup
- CRUD operations for saved dishes
- Random meal generator
- Zomato integration for orders
- Google Maps API for nearby restaurants
- AI-powered dish suggestions via Gemini API
- Fully responsive design with Material UI and Tailwind CSS

### Tech Stack

**React.js** – User interface
**React Router** – Routing and navigation
**Material UI** – UI components
**Tailwind CSS** – Utility-first styling
**Axios** – HTTP requests
**Google Maps API** – Location services
**Gemini API** – AI suggestions
**Material UI** – Component-level styling
**EmailJS** – Email functionality
**JWT Decode** – JWT management
**HTML React Parser** – HTML rendering
**Marked** – Markdown parsing
**Context API** – Global state management
**React Hooks** – State and lifecycle management
**Vite** – Development and build
**ESLint & Prettier** – Code consistency

### Getting Started

Prerequisites
Node.js (v14 or higher)
npm
Backend service for APIs (Backend Repo)

### Installation

- Clone the repository:

git clone https://github.com/yourusername/kyakhanahai-frontend.git
cd kyakhanahai-frontend

- Install dependencies:
  npm install

- Running the Application

npm run dev

Open your browser and navigate to http://localhost:5173.

### Environment Variables

Create a .env file in the root directory with the following:

REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_ZOMATO_API_KEY=your_zomato_api_key

### Project Structure(Frontend)

├── public
├── src
│ ├── assets # Static assets
│ ├── components # Reusable React components
│ ├── context # Global state management
│ ├── main.jsx # Root component
│ ├── App.css # Styling
└── .env
└── .gitignore
└── index.html
└── package.json
└── package-lock.json
└── tailwind.config.js
└── vite.config.js

### Available Scripts

npm start / yarn start: Starts the development server.
npm run build / yarn build: Builds the app for production.
npm test / yarn test: Runs tests (if applicable).

### Styling

Uses Material UI for component styling.
Utilizes Tailwind CSS for utility-based styling.

### Contributing

At this time, I am not accepting contributions to this project. If you have feedback or suggestions, feel free to reach out via email, but please note that contributions such as pull requests or issues will not be considered.

Contact
For any inquiries or feedback, please contact us at your-kash.cdac@gmail.com.
