import React from 'react';
import { Link } from 'react-router-dom';

const Interpretacion = () => (
  <div className="container">
    <h1>4. Interpretación de datos</h1>
    <p>Te enseñará a leer y analizar gráficos para identificar patrones, tendencias y tomar decisiones basadas en datos reales.</p>
    <ol>
      <li>Cómo leer visualizaciones correctamente.</li>
      <li>Errores comunes al interpretar datos.</li>
      <li>Identificación de tendencias, patrones y valores atípicos.</li>  
    </ol>
    <Link to="/">← Volver al índice</Link>
  </div>
);

export default Interpretacion;
