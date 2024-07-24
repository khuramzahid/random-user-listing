# Random User Listing

A React application built with TypeScript that allows users to view a list of random users with pagination, search functionality, and filtering by gender. Users can also navigate to a detailed profile page for each user.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Listing**: Displays a list of users fetched from the Random User Generator API.
- **Pagination**: Navigate through multiple pages of users.
- **Search Functionality**: Filter users by name using a search input.
- **Gender Filtering**: Filter users by gender.
- **Profile Navigation**: Click on a user's name to view their detailed profile.
- **Persistent Filters**: Filters persist even when navigating away and returning to the user list.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://<GITHUB_ACCESS_TOKEN>@github.com/khuramzahid/random-user-listing.git
   cd random-user-listing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Open the application in your browser:**
   - Navigate to `http://localhost:3000` to view the application.

3. **Explore the features:**
   - **User List**: Browse through the paginated list of users.
   - **Search**: Use the search input to filter users by name.
   - **Gender Filter**: Select a gender from the dropdown to filter users.
   - **Profile Page**: Click on a user's name to view their detailed profile.

## Project Structure

```
random-user-listing/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── UserList.tsx
│   │   └── UserProfile.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

- **`src/components/UserList.tsx`**: Component for displaying the user list with pagination, search, and filtering.
- **`src/components/UserProfile.tsx`**: Component for displaying detailed information about a single user.
- **`src/App.tsx`**: Main application component with routing.
- **`src/index.tsx`**: Entry point for the React application.

## Running the Application

1. **Ensure you have the required dependencies installed:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Access the application:**
   - Open your web browser and go to `http://localhost:3000`.
