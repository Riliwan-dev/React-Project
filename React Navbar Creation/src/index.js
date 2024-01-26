import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root')); // error
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);