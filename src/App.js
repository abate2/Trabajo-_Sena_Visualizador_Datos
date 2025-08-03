import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Index from './pages/Index';
import Introduccion from './pages/Introduccion';
import Graficas from './pages/Graficas';
import Herramientas from './pages/Herramientas';
import Interpretacion from './pages/Interpretacion';
import Dashboards from './pages/Dashboards';

import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Activar modo oscuro automáticamente después de las 6 pm
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
      setDarkMode(true);
    }
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`layout ${darkMode ? 'dark' : 'light'}`}>
        <Header />
        <div className="content">
          <div className="toggle-container">
            <button onClick={toggleMode}>
              Cambiar a modo {darkMode ? 'claro' : 'oscuro'}
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/introduccion" element={<Introduccion />} />
            <Route path="/graficas" element={<Graficas />} />
            <Route path="/herramientas" element={<Herramientas />} />
            <Route path="/interpretacion" element={<Interpretacion />} />
            <Route path="/dashboards" element={<Dashboards />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
