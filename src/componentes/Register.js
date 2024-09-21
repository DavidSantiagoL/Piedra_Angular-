import React, { useState } from 'react';
import logo from '../img/logo.png';
import '../css/Register.css'; // Ensure you have a separate CSS file for styles

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5001/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
        const message = await response.text();
        alert(message);
    };

    return (
        <div className="register-container">
            <header className="register-header">
                <div className="register-header-top">
                    <img className="register-logo" src={logo} alt="Logo de mi página" />
                    <h1 className="register-title">Piedra angular®</h1>
                </div>
            </header>
            <h1 className="register-h1">Registro</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="register-input-username"
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="register-input-email"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="register-input-password"
                />
                <button type="submit" className="register-button">Registrarse</button>
            </form>
            <footer className="register-footer">
                <p>&copy; 2024 Piedra Angular®. 2877651 por David Santiago Lombana Martinez.</p>
            </footer>
        </div>
    );
};

export default Register;
