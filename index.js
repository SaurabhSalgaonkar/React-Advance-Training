
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const renderElemnt = document.getElementById('root');
const root = ReactDOM.createRoot(renderElemnt);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>    
);

// const element = document.createElement('div');
// element.innerHTML = 'Hi,I am div';
// const renderElemnt = document.getElementById('root');

// renderElemnt.appendChild(element);