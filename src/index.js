import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// This tells us which components should have acces to our store
import App from './App';
import employeeInfoReducer from './employeeStore';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = configureStore({
  reducer: {
    employeeinfo: employeeInfoReducer,
  },
});

// configure store is a function that helps us to maintain a collection of reducers

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// We have wrapped our whole App component inside our provider that basically means the whole application will have access to our store

// reducer is a function that takes some information about the state, it also takes some actons that we want to perform on the state
