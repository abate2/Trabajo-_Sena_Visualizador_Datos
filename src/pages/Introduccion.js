import React from 'react';
import { Link } from 'react-router-dom';

const Introduccion = () => (
  <div className="container">
    <h1>1. Introducción</h1>
    <p>Este módulo explica qué es la visualización de datos y por qué es tan importante. Aprenderás cómo transformar datos complejos en gráficos comprensibles.</p>
    <Link to="/">← Volver al índice</Link>
  </div>
);

export default Introduccion;
