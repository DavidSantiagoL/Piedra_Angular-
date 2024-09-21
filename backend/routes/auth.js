// routes/auth.js
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false // Verifica si esto es necesario
    }
});


// Verificar la conexión a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

// Registro de usuario
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
        if (err) {
            return res.status(500).send('Error al registrar el usuario');
        }
        res.status(201).send('Usuario registrado');
    });
});

// Inicio de sesión
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).send('Correo o contraseña incorrectos');
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send('Correo o contraseña incorrectos');
        }
    });
});

// Rutas CRUD
router.get('/users', (req, res) => {
    db.query('SELECT id, username, email FROM users', (err, results) => {
        if (err) {
            return res.status(500).send('Error al obtener los usuarios');
        }
        res.json(results);
    });
});

router.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
        [username, email, hashedPassword], (err) => {
            if (err) {
                return res.status(500).send('Error al registrar el usuario');
            }
            res.status(201).send('Usuario registrado');
        });
});

router.put('/users/:id', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

    db.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', 
        [username, email, hashedPassword, req.params.id], (err) => {
            if (err) {
                return res.status(500).send('Error al actualizar el usuario');
            }
            res.send('Usuario actualizado');
    });
});

router.delete('/users/:id', (req, res) => {
    db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
        if (err) {
            return res.status(500).send('Error al eliminar el usuario');
        }
        res.send('Usuario eliminado');
    });
});

module.exports = router;
