import React from 'react';
import { Link } from 'react-router-dom';

const Introduccion = () => (
  <div className="container">
    <h1>1. Introducción</h1>
    <p>El curso "Visualizador de Datos" está orientado a enseñar cómo transformar información compleja en gráficos comprensibles que apoyen la toma de decisiones. Utiliza herramientas accesibles y principios de diseño visual para representar datos de manera clara, precisa y útil. Está diseñado para personas que buscan introducirse al análisis visual de datos, sin necesidad de conocimientos previos técnicos.</p>
    <ol>
      <li>Explicación del rol del visualizador de datos.</li>
      <li>Importancia del análisis visual en el trabajo, la educación y la vida diaria.</li>
      <li>Cómo los datos bien presentados ayudan a detectar oportunidades y problemas.</li>
    </ol>
    <Link to="/">← Volver al índice</Link>
  </div>
);

export default Introduccion;
