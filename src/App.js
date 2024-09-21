// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './componentes/homePage';
import ContactoPage from './componentes/contactoPage';
import ProductosPage from './componentes/productosPage';
import ServiciosPage from './componentes/serviciosPage';
import Navigation from './componentes/Navigation';
import Register from './componentes/Register';
import Login from './componentes/Login';
import Users from './componentes/Users';


function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/homePage" element={<HomePage />} />
                <Route path="/contactoPage" element={<ContactoPage />} />
                <Route path="/productosPage" element={<ProductosPage />} />
                <Route path="/serviciosPage" element={<ServiciosPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Users" element={<Users />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
