// src/components/ProductosPage.js

import React from 'react';
import '../css/stylesProductos.css'; // Asegúrate de que esta ruta sea correcta
import logo from '../img/logo.png';
import sellador from '../img/D_NQ_NP_2X_896985-MLA73729349434_012024-T.webp';
import limpiador from '../img/be6da01ef1b4599881810ad6a81f684f.jpg';
import pulidor from '../img/Polisseur-marbre-EP.jpg';
import kitReparacion from '../img/71JuRNqJokL._SL1500_.jpg';


const ProductosPage = () => {
    return (
        <div>
            <header>
                <div className="header-top">
                    <img className="img3" src={logo} alt="Logo de mi página" />
                    <h1 className="titulo">Piedra angular®</h1>
                </div>
            
                
            
            </header>

            <article className="listas">
                <div className="presentacion">
                    <img src={sellador} alt="Sellador de Mármol" />
                    <section className="contenido">
                        Sellador para Mármol: Producto especializado para proteger y mantener la superficie del mármol, preservando su brillo y resistencia a manchas.
                    </section>
                </div>

                <div className="presentacion">
                    <img src={limpiador} alt="Limpiador de Mármol" style={{ width: '100px' }} />
                    <section className="contenido">
                        Limpiador de Mármol: Solución suave y efectiva para la limpieza regular de encimeras y mesones de mármol, eliminando la suciedad y manteniendo su aspecto impecable.
                    </section>
                </div>

                <div className="presentacion">
                    <img src={pulidor} alt="Pulidor de Mármol" />
                    <section className="contenido">
                        Pulidor de Mármol: Producto para restaurar y revitalizar superficies desgastadas de mármol, devolviendo su lustre original y eliminando pequeños arañazos.
                    </section>
                </div>

                <div className="presentacion">
                    <img src={kitReparacion} alt="Kit de Reparación de Mármol" />
                    <section className="contenido">
                        Kit de Reparación de Mármol: Herramientas y materiales para realizar reparaciones menores en superficies de mármol, como grietas o pequeños chips, manteniendo la integridad estética del material.
                    </section>
                </div>
            </article>

            <footer>
                <p>&copy; 2024 Piedra Angular®. 2877651 por David Santiago Lombana Martinez.</p>
            </footer>
        </div>
    );
};

export default ProductosPage;
