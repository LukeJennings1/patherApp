import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorHandler from './ErrorHandler';
import Create from './Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element = {<App />}></Route>
            <Route path = '*' element = {<ErrorHandler />}></Route>
            <Route path = 'create' element = {<Create />}></Route>
        </Routes>
    </BrowserRouter>
);