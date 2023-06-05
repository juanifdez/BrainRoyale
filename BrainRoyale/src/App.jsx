import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Routing from './Routing';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>,
)