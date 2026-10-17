# Retail Inventory Manager

A mobile inventory management application built with **React Native CLI** to practise core React Native concepts through a practical retail inventory use case.

## Overview

Retail Inventory Manager allows users to view inventory, identify products running low on stock, and add new items with input validation. This project focuses on component-based UI development, shared state management, stack navigation, and handling user input.

## Features

- **Inventory Overview:** View all inventory items and their quantities.
- **Low Stock Tracking:** Identify products with a quantity of 5 or less.
- **Add New Items:** Add inventory items with a name and quantity.
- **Input Validation:** Handle empty fields, whitespace-only names, negative quantities, decimal values, and invalid numeric input.
- **Shared State Management:** Keep inventory data synchronized across screens using React state.
- **Stack Navigation:** Navigate between the inventory overview, low-stock screen, and add-item screen.
- **Reusable Styling:** Maintain consistent UI styling through a shared stylesheet.
- **Dynamic Lists:** Render inventory items using React Native's `FlatList`.

## Tech Stack

- React Native CLI
- React
- JavaScript
- React Navigation
- React Native StyleSheet

## Project Structure

```text
Retail-Inventory-Manager/
├── App.jsx
├── src/
│   └── shop/
│       ├── Home.jsx
│       ├── lowStock.tsx
│       ├── AddItem.tsx
│       ├── products.js
│       └── styles.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- React Native development environment
- Android Studio and an Android emulator, or a compatible Android device

### View the Project

[Retail Inventory Manager](https://github.com/Arshiyan7/Web-Development-Playground/tree/master/React_Native/MyApp/src/Retail_Inventory_Manager)

> **Note:** Make sure your local React Native environment is configured before running the application.

## Input Validation

The application validates user input before adding an inventory item.

- Item names cannot be empty or contain only whitespace.
- Quantity is required.
- Quantity must be a non-negative whole number.
- Validation errors are displayed directly below the relevant input.

## Current Limitations

- Inventory data is stored in React state and is not persisted after the application restarts.
- Backend and database integration are not implemented.
- Editing and deleting inventory items are not currently available.
- Authentication and automated testing have not yet been implemented.

## Learning Outcomes

Through this project, I gained practical experience with:

- Building reusable React Native components.
- Managing and sharing state between screens.
- Implementing stack-based navigation.
- Working with controlled `TextInput` components.
- Validating user input and displaying inline errors.
- Updating arrays immutably with React state setters.
- Generating unique IDs for new inventory items.
- Rendering dynamic lists with `FlatList`.
- Organizing styles and debugging application logic.

## Future Improvements

- Add local persistence or backend integration.
- Implement editing and deleting inventory items.
- Add search and category filtering.
- Integrate a backend API.
- Expand TypeScript coverage.
- Introduce automated testing.

## Author

Developed as a hands-on learning project to strengthen my React Native development skills and gain practical experience building mobile applications.