// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'; // Import redux-logger
import counterReducer from './features/counterSlice';

// Create the logger middleware
const logger = createLogger({
  // You can customize the logger options here
  collapsed: true, // Collapses the log output for better readability
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // Add logger to the middleware chain
});
