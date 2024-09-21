// src/components/ContactoPage.js

import React from 'react';
import '../css/stylesContacto.css'; // Asegúrate de que esta ruta sea correcta
import logo from '../img/logo.png'; // Asegúrate de que la ruta de la imagen sea correcta


const ContactoPage = () => {
    return (
        <div>
            <header>
                <div className="header-top">
                    <img className="img3" src={logo} alt="Logo de mi página" />
                    <h1 className="titulo">Piedra angular®</h1>
                </div>
            
                    
                
            </header>

            <div className="container">
                <h1>Contacto</h1>
                
                <div className="contact-info">
                    <p><span>Dirección:</span> Cra. 75 #68b-29, Bogotá</p>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.2409998756582!2d-74.10175809301884!3d4.6859767572468325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b334b376bb5%3A0xa5d4056530ccdc61!2sInternacional%20De%20Acabados!5e0!3m2!1ses-419!2sco!4v1718654180329!5m2!1ses-419!2sco" 
                        width="400" 
                        height="300" 
                        style={{ border: '0' }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                    <p><span>Teléfono:</span> 3005657714</p>
                    <p><span>Email:</span> <a href="mailto:gran.lombana@gmail.com">gran.lombana@gmail.com</a></p>
                </div>
                
                <div className="contact-form">
                    <form action="#" method="post">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                        
                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
            
            <footer>
                <p>&copy; 2024 Piedra Angular®. 2877651 por David Santiago Lombana Martinez.</p>
            </footer>
        </div>
    );
};

export default ContactoPage;
