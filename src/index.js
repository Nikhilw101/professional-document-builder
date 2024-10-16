import React from 'react';
import ReactDOM from 'react-dom'; // Use 'react-dom' instead of 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root'); // Get the root element

// Use ReactDOM.render for React 17
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// Report web vitals
reportWebVitals();
