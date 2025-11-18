import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import { numerosSuspeitos, estatisticas } from '../utils/mockData';
import CardNumero from '../components/CardNumero';
import './Home.css';

function Home() {
  const top5 = numerosSuspeitos.slice(0, 5);

  return (
    <div className="home">
      <section className="hero">
        <FaShieldAlt className="hero-icon" />
        <h1>Sistema Anti-Golpe</h1>
        <p>Proteja-se contra golpes telefônicos. Consulte números suspeitos e denuncie tentativas de fraude.</p>
        
        <div className="hero-buttons">
          <Link to="/consultar" className="btn btn-primary">
            <FaSearch /> Consultar Número
          </Link>
          <Link to="/denunciar" className="btn btn-danger">
            <FaExclamationTriangle /> Fazer Denúncia
          </Link>
        </div>
      </section>

      <section className="stats">
        <h2>📊 Estatísticas Gerais</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{estatisticas.totalNumeros.toLocaleString()}</h3>
            <p>Números Cadastrados</p>
          </div>
          <div className="stat-card">
            <h3>{estatisticas.totalDenuncias.toLocaleString()}</h3>
            <p>Denúncias Registradas</p>
          </div>
          <div className="stat-card critical">
            <h3>{estatisticas.numerosCriticos}</h3>
            <p>Números Críticos</p>
          </div>
          <div className="stat-card high">
            <h3>{estatisticas.numerosAlto}</h3>
            <p>Números Alto Risco</p>
          </div>
        </div>
      </section>

      <section className="ranking-preview">
        <div className="section-header">
          <h2>🔥 Top 5 Números Mais Perigosos</h2>
          <Link to="/ranking" className="link-ver-mais">Ver ranking completo →</Link>
        </div>
        
        <div className="grid">
          {top5.map((numero) => (
            <CardNumero key={numero.id} numero={numero} />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>🛡️ Proteja-se!</h2>
        <p>Se você recebeu uma ligação suspeita, consulte o número antes de fornecer qualquer informação.</p>
        <Link to="/consultar" className="btn btn-primary">
          Consultar Agora
        </Link>
      </section>
    </div>
  );
}

export default Home;

