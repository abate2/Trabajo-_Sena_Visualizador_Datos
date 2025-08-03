import React from 'react';
import { Link } from 'react-router-dom';

const Graficas = () => (
  <div className="container">
    <h1>2. Tipos de gráficas</h1>
    <p>Conocerás los distintos tipos de gráficas como barras, líneas, pastel, etc., y cuándo usar cada una según el tipo de datos que se quiere representar.</p>
    <ol>
      <li>Principios de diseño visual: jerarquía, color, forma y contraste.</li>
      <li>Tipos de gráficas: de barras, líneas, pastel, tablas, mapas y dashboards.</li>
      <li>Cómo elegir el tipo de visualización adecuada según el objetivo del análisis.</li>  
    </ol>

        {/* Imagen representativa del dashboard */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img
        src="/images/graficos.png"
        alt="Ejemplo de dashboard"
        style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}
      />
    </div>

    <Link to="/">← Volver al índice</Link>
  </div>
);

export default Graficas;
