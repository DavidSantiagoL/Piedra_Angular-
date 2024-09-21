import React, { useState } from 'react';
import '../css/Login.css';
import logo from '../img/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
                alert('Inicio de sesión exitoso');
                // Redirigir o realizar otra acción aquí
            } else {
                const message = await response.text();
                setErrorMessage(message);
            }
        } catch (error) {
            setErrorMessage('Error de conexión. Intenta más tarde.');
        }
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <div className="login-header-top">
                    <img className="login-logo" src={logo} alt="Logo de mi página" />
                    <h1 className="login-title">Piedra angular®</h1>
                </div>
            </header>

            <h1 className="login-h1">Iniciar Sesión</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="login-input-email"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input-password"
                />
                <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>

            <footer className="login-footer">
                <p>&copy; 2024 Piedra Angular®. 2877651 por David Santiago Lombana Martinez.</p>
            </footer>
        </div>
    );
};

export default Login;
