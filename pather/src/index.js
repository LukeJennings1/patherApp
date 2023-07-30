import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorHandler from './ErrorHandler';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element = {<App />}></Route>
            {/* <Route path = 'Create' element = {<Create />}></Route> */}
            <Route path = '*' element = {<ErrorHandler />}></Route>
        </Routes>
    </BrowserRouter>
);