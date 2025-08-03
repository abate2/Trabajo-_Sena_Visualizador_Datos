import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <div className="container">
    <h1>Curso: Visualizador de Datos</h1>
    <p>Explora los temas del curso paso a paso:</p>
    <ul>
      <li><Link to="/introduccion">1. Introducción</Link></li>
      <li><Link to="/graficas">2. Tipos de gráficas</Link></li>
      <li><Link to="/herramientas">3. Herramientas de visualización</Link></li>
      <li><Link to="/interpretacion">4. Interpretación de datos</Link></li>
      <li><Link to="/dashboards">5. Creación de dashboards</Link></li>
    </ul>
  </div>
);

export default Index;
