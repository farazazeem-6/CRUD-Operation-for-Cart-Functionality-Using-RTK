# Shopping Cart Application with Redux

A modern React shopping cart application built with Vite and Redux for state management. This project demonstrates real-world Redux patterns including slices, async thunks, and API integration.

## 🛍️ Features

- **Product Catalog** - Browse available products with descriptions and prices
- **Shopping Cart** - Add/remove products, update quantities
- **Redux State Management** - Centralized state for cart and products
- **Mock API** - JSON server for simulating backend API calls
- **Responsive Design** - Clean UI with CSS styling

## 📁 Project Structure

```
src/
├── app/
│   └── store.js              # Redux store configuration
├── components/
│   └── Header.jsx            # Navigation header
├── features/
│   ├── cart/                 # Cart feature slice
│   │   ├── Cart.jsx
│   │   ├── cartSlice.js     # Redux slice for cart state
│   │   └── cartAPI.js       # Cart API calls
│   └── products/             # Products feature slice
│       ├── Products.jsx
│       ├── productSlice.js  # Redux slice for products state
│       └── productAPI.js    # Product API calls
├── utils/
│   └── index.js              # Utility functions
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

Start the mock JSON server:
```bash
npm run server
```

### Building for Production

```bash
npm run build
```

## 🏗️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Redux** - State management
- **JSON Server** - Mock API server
- **ESLint** - Code linting

## 📚 Redux Architecture

This project uses Redux Toolkit's modern approach:
- **Slices** - Encapsulated state, reducers, and actions (cart and products)
- **Async Thunks** - Handling API calls and side effects
- **Centralized Store** - Single source of truth for app state
