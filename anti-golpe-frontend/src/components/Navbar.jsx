import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaSearch, FaExclamationTriangle, FaTrophy, FaChartBar, FaList } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaShieldAlt /> TrustGuard
        </Link>
        
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              <FaShieldAlt /> Início
            </Link>
          </li>
          <li>
            <Link to="/consultar" className="navbar-link">
              <FaSearch /> Consultar
            </Link>
          </li>
          <li>
            <Link to="/denunciar" className="navbar-link">
              <FaExclamationTriangle /> Denunciar
            </Link>
          </li>
          <li>
            <Link to="/ranking" className="navbar-link">
              <FaTrophy /> Ranking
            </Link>
          </li>
          <li>
            <Link to="/estatisticas" className="navbar-link">
              <FaChartBar /> Estatísticas
            </Link>
          </li>
          <li>
            <Link to="/categorias" className="navbar-link">
              <FaList /> Categorias
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

