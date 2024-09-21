import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/stylesUsers.css';
import logo from '../img/logo.png';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/auth/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`http://localhost:5001/api/auth/users/${editingId}`, { username, email, password });
            } else {
                await axios.post('http://localhost:5001/api/auth/users', { username, email, password });
            }
            setUsername('');
            setEmail('');
            setPassword('');
            setEditingId(null);
            fetchUsers();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleEdit = (user) => {
        setUsername(user.username);
        setEmail(user.email);
        setPassword(''); // Password is usually not shown when editing
        setEditingId(user.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/auth/users/${id}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="users-container">
            <header className="login-header">
                <div className="login-header-top">
                    <img className="login-logo" src={logo} alt="Logo de mi página" />
                    <h1 className="login-title">Piedra angular®</h1>
                </div>
            </header>
            <h1 className="users-title">Usuarios</h1>
            <form className="user-form" onSubmit={handleSubmit}>
                <input
                    className="input-username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="input-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="input-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="submit-button" type="submit">
                    {editingId ? 'Actualizar' : 'Crear'}
                </button>
            </form>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        <h2 className="user-username">{user.username}</h2>
                        <p className="user-email">{user.email}</p>
                        <button className="edit-button" onClick={() => handleEdit(user)}>Editar</button>
                        <button className="delete-button" onClick={() => handleDelete(user.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <footer className="login-footer">
                <p>&copy; 2024 Piedra Angular®. 2877651 por David Santiago Lombana Martinez.</p>
            </footer>
        </div>
    );
};

export default Users;
