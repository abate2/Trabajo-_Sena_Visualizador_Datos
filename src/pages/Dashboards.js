import React from 'react';
import { Link } from 'react-router-dom';

const Dashboards = () => (
  <div className="container">
    <h1>5. Creación de dashboards</h1>
    <p>
      Aprenderás a construir paneles interactivos para presentar datos dinámicos y actualizados en tiempo real de forma clara y útil.
    </p>
    <ol>
      <li>Qué es un dashboard (panel de control visual).</li>
      <li>Elementos que debe contener un buen dashboard.</li>
      <li>Consejos para construir visualizaciones interactivas y claras.</li>
      <li>Ejemplo de dashboard <a>https://dashboard-ecomerce.onrender.com/</a></li>
    </ol>

    {/* Imagen representativa del dashboard */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img
        src="/images/dashboard-ejemplo.png"
        alt="Ejemplo de dashboard"
        style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>

    <Link to="/">&larr; Volver al índice</Link>
  </div>
);

export default Dashboards;

    