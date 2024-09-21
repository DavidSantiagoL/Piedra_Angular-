// src/components/Navigation.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navigation.css';

function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav>
            <ul>
                {currentPath !== "/homePage" && (
                    <li><Link to="/homePage">Inicio</Link></li>
                )}
                {currentPath !== "/serviciosPage" && (
                    <li><Link to="/serviciosPage">Servicios</Link></li>
                )}
                {currentPath !== "/productosPage" && (
                    <li><Link to="/productosPage">Productos</Link></li>
                )}
                {currentPath !== "/contactoPage" && (
                    <li><Link to="/contactoPage">Contacto</Link></li>
                )}
                {currentPath !== "/Login" && (
                    <li><Link to="/Login">Inicio de sesión</Link></li>
                )}
                {currentPath !== "/Register" && (
                    <li><Link to="/Register">Registro de usuario</Link></li>
                )}
                {currentPath !== "/Users" && (
                    <li><Link to="/Users">Crud Usuarios</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;
