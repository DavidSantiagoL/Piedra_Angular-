// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Usa 'react-dom/client' en React 18
import './index.css'; // Importa el CSS global
import App from './App'; // Importa el componente principal

// Crea la raíz del DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación en la raíz creada
root.render(
  <React.StrictMode>
      <App />
    
  </React.StrictMode>
);
