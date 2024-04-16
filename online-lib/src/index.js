import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookStoreProvider from './Context/BookStoreProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BookStoreProvider>
      <App />
    </BookStoreProvider>
  </React.StrictMode>
);

reportWebVitals();
