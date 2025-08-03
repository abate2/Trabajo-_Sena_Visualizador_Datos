import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo-sena.png" alt="Logo SENA" className="logo" />
        <h1>Visualizador de Datos</h1>
      </div>
      <nav>
        <ul className="nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/introduccion">Introducción</Link></li>
          <li><Link to="/graficas">Gráficas</Link></li>
          <li><Link to="/herramientas">Herramientas</Link></li>
          <li><Link to="/interpretacion">Interpretación</Link></li>
          <li><Link to="/dashboards">Dashboards</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
