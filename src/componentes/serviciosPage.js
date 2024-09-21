// src/components/ServiciosPage.js

import React from 'react';
import '../css/stylesServicios.css'; // Asegúrate de que esta ruta sea correcta
import logo from '../img/logo.png';
import cocinaMarmol from '../img/Cocina-piso-marmol-crema-marfil-mesones-granito-verde-candeias.png';
import banosMarmol from '../img/yanyare-lavabo-marmol-verde-zoom.jpg';
import bbqMarmol from '../img/108385014_659574071301276_4101940678338534408_n.jpg';
import mantenimientoMarmol from '../img/mantenimiento-a-marmol-existente-772108.jpg';

const ServiciosPage = () => {
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
                    <img src={cocinaMarmol} alt="Cocinas en Mármol" />
                    <section className="contenido">
                        Creación de Cocinas en Mármol: Diseñamos y fabricamos encimeras y mesones personalizados en mármol para cocinas residenciales y comerciales, combinando funcionalidad y estética.
                    </section>
                </div>

                <div className="presentacion">
                    <img src={banosMarmol} alt="Baños en Mármol" />
                    <section className="contenido">
                        Mesones para Baños en Mármol: Creamos mesones y lavamanos en mármol que añaden un toque de elegancia y durabilidad a los baños, adaptados a las necesidades de nuestros clientes.
                    </section>
                </div>

                <div className="presentacion">
                    <img src={bbqMarmol} alt="Cocina en Mármol" />
                    <section className="contenido">
                        Mesones para BBQs en Mármol: Construimos mesones y áreas de trabajo en mármol para BBQs, proporcionando superficies robustas y fáciles de limpiar para disfrutar al aire libre.
                    </section>
                </div>

                <div className="presentacion">
                    <img src={mantenimientoMarmol} className="reparar" alt="Reparación de Mármol" />
                    <section className="contenido">
                        Reparación y Mantenimiento de Mármol: Ofrecemos servicios profesionales para la reparación de superficies de mármol dañadas, así como mantenimiento preventivo para asegurar su conservación y belleza a largo plazo.
                    </section>
                </div>
            </article>

            <footer>
                <p>&copy; 2024 Piedra Angular®. 2877651 por David Santiago Lombana Martinez.</p>
            </footer>
        </div>
    );
};

export default ServiciosPage;
