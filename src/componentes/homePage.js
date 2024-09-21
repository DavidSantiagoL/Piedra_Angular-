// src/components/HomePage.js

import React from 'react';


import '../css/stylesInicio.css'; // Asegúrate de que esta ruta sea correcta
import logo from '../img/logo.png';
import bannerImg from '../img/stone-8692404_1280.jpg';
import producto1 from '../img/producto1.jpg';
import producto2 from '../img/prtoducto2.webp';
import producto3 from '../img/servicio.avif';

const HomePage = () => {
    return (
        <div>
            <header>
                <div className="header-top">
                    <img className="img3" src={logo} alt="Logo de mi página" />
                    <h1 className="titulo">Piedra angular®</h1>
                </div>
                
      
                
            </header>

            <div className="banner">
                <img src={bannerImg} alt="Imagen de bienvenida" className="banner-img" />
                <h2>¡Bienvenido a Piedra Angular!</h2>
                <p className='p'>Transformamos tus espacios con mármol de la más alta calidad.</p>
            </div>

            <section className="galeria">
                <h2>Nuestros Productos</h2>
                <div className="galeria-item">
                    <img src={producto1} alt="Producto 1" />
                    <p>Encimeras Personalizadas</p>
                </div>
                <div className="galeria-item">
                    <img src={producto2} alt="Producto 2" />
                    <p>Mesones para Baños</p>
                </div>
                <div className="galeria-item">
                    <img src={producto3} alt="Producto 3" />
                    <p>Mesones para BBQs</p>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Piedra Angular®. 2877651 por David Santiago Lombana Martinez.</p>
            </footer>
        </div>
    );
};

export default HomePage;
