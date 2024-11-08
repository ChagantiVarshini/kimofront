import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, for global styles
import App from './App';  // Main component of the app


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Make sure an element with ID 'root' exists in index.html
);

// Optional for performance monitoring

