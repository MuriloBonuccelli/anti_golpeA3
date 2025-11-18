import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import { estatisticas } from '../utils/mockData';
import './Estatisticas.css';

function Estatisticas() {
  return (
    <div className="estatisticas">
      <div className="estatisticas-header">
        <FaChartBar className="page-icon" />
        <h1>Estatísticas do Sistema</h1>
        <p>Dados consolidados sobre denúncias e números suspeitos</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card-large">
          <h3>{estatisticas.totalNumeros.toLocaleString()}</h3>
          <p>Números Cadastrados</p>
        </div>
        <div className="stat-card-large">
          <h3>{estatisticas.totalDenuncias.toLocaleString()}</h3>
          <p>Denúncias Registradas</p>
        </div>
      </div>

      <div className="secao">
        <h2>📊 Distribuição por Nível de Risco</h2>
        <div className="risco-grid">
          <div className="risco-card critico">
            <div className="risco-numero">{estatisticas.numerosCriticos}</div>
            <div className="risco-label">🔴 Crítico</div>
            <div className="risco-barra">
              <div 
                className="risco-progresso critico" 
                style={{ width: `${(estatisticas.numerosCriticos / estatisticas.totalNumeros * 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="risco-card alto">
            <div className="risco-numero">{estatisticas.numerosAlto}</div>
            <div className="risco-label">🟠 Alto</div>
            <div className="risco-barra">
              <div 
                className="risco-progresso alto" 
                style={{ width: `${(estatisticas.numerosAlto / estatisticas.totalNumeros * 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="risco-card medio">
            <div className="risco-numero">{estatisticas.numerosMedio}</div>
            <div className="risco-label">🟡 Médio</div>
            <div className="risco-barra">
              <div 
                className="risco-progresso medio" 
                style={{ width: `${(estatisticas.numerosMedio / estatisticas.totalNumeros * 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="risco-card baixo">
            <div className="risco-numero">{estatisticas.numerosBaixo}</div>
            <div className="risco-label">🟢 Baixo</div>
            <div className="risco-barra">
              <div 
                className="risco-progresso baixo" 
                style={{ width: `${(estatisticas.numerosBaixo / estatisticas.totalNumeros * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="secao">
        <h2>📋 Denúncias por Categoria</h2>
        <div className="categorias-stats">
          {estatisticas.denunciasPorCategoria.map((cat, index) => (
            <div key={index} className="categoria-stat">
              <div className="categoria-info">
                <span className="categoria-nome">{cat.nome}</span>
                <span className="categoria-total">{cat.total} denúncias</span>
              </div>
              <div className="categoria-barra">
                <div 
                  className="categoria-progresso" 
                  style={{ width: `${cat.percentual}%` }}
                >
                  <span className="percentual">{cat.percentual}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Estatisticas;

