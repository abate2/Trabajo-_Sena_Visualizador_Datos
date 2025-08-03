import React from 'react';
import { Link } from 'react-router-dom';

const Herramientas = () => (
  <div className="container">
    <h1>3. Herramientas de visualización</h1>
    <p>Aprenderás a utilizar herramientas como Excel, Google Data Studio y otros programas para crear visualizaciones impactantes y funcionales.</p>
    <ol>
      <li>Uso de herramientas como hojas de cálculo (Excel, Google Sheets).</li>
      <li>TIntroducción a software de visualización como Tableau o Power BI (mencionado de forma general).</li>
      <li>Recolección, limpieza y organización de datos antes de graficar.</li>  
    </ol>
        {/* Imagen representativa del dashboard */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img
        src="/images/powerBiEjemplo.PNG"
        alt="Ejemplo de dashboard"
        style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>
    <Link to="/">← Volver al índice</Link>
  </div>
);

export default Herramientas;
