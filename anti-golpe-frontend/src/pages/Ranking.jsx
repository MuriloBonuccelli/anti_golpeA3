import React, { useState } from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { numerosSuspeitos } from '../utils/mockData';
import CardNumero from '../components/CardNumero';
import './Ranking.css';

function Ranking() {
  const [filtro, setFiltro] = useState('todos');

  const numerosFiltrados = filtro === 'todos' 
    ? numerosSuspeitos 
    : numerosSuspeitos.filter(n => n.nivelRisco === filtro);

  return (
    <div className="ranking">
      <div className="ranking-header">
        <FaTrophy className="page-icon" />
        <h1>Ranking de Números Suspeitos</h1>
        <p>Os números com mais denúncias registradas</p>
      </div>

      <div className="filtros">
        <button 
          className={`filtro-btn ${filtro === 'todos' ? 'active' : ''}`}
          onClick={() => setFiltro('todos')}
        >
          Todos ({numerosSuspeitos.length})
        </button>
        <button 
          className={`filtro-btn critico ${filtro === 'critico' ? 'active' : ''}`}
          onClick={() => setFiltro('critico')}
        >
          🔴 Crítico ({numerosSuspeitos.filter(n => n.nivelRisco === 'critico').length})
        </button>
        <button 
          className={`filtro-btn alto ${filtro === 'alto' ? 'active' : ''}`}
          onClick={() => setFiltro('alto')}
        >
          🟠 Alto ({numerosSuspeitos.filter(n => n.nivelRisco === 'alto').length})
        </button>
        <button 
          className={`filtro-btn medio ${filtro === 'medio' ? 'active' : ''}`}
          onClick={() => setFiltro('medio')}
        >
          🟡 Médio ({numerosSuspeitos.filter(n => n.nivelRisco === 'medio').length})
        </button>
        <button 
          className={`filtro-btn baixo ${filtro === 'baixo' ? 'active' : ''}`}
          onClick={() => setFiltro('baixo')}
        >
          🟢 Baixo ({numerosSuspeitos.filter(n => n.nivelRisco === 'baixo').length})
        </button>
      </div>

      <div className="ranking-lista">
        {numerosFiltrados.map((numero, index) => (
          <div key={numero.id} className="ranking-item">
            <div className="posicao">
              {index === 0 && <FaTrophy className="medal gold" />}
              {index === 1 && <FaMedal className="medal silver" />}
              {index === 2 && <FaMedal className="medal bronze" />}
              {index > 2 && <span className="numero-posicao">{index + 1}º</span>}
            </div>
            <div className="card-wrapper">
              <CardNumero numero={numero} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;

