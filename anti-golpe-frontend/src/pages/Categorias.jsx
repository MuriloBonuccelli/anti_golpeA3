import React from 'react';
import { FaList } from 'react-icons/fa';
import { categorias } from '../utils/mockData';
import './Categorias.css';

function Categorias() {
  return (
    <div className="categorias-page">
      <div className="categorias-header">
        <FaList className="page-icon" />
        <h1>Tipos de Golpes</h1>
        <p>Conheça os principais tipos de golpes telefônicos e saiba como se proteger</p>
      </div>

      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="categoria-card">
            <div className="categoria-numero">{categoria.id}</div>
            <h3>{categoria.nome}</h3>
            <p>{categoria.descricao}</p>
            <div className="categoria-dica">
              <strong>💡 Dica:</strong> Nunca forneça dados pessoais por telefone sem confirmar a identidade do solicitante.
            </div>
          </div>
        ))}
      </div>

      <div className="dicas-gerais">
        <h2>🛡️ Dicas Gerais de Segurança</h2>
        <div className="dicas-grid">
          <div className="dica-card">
            <h4>🔒 Proteja seus Dados</h4>
            <p>Nunca forneça senhas, códigos ou dados bancários por telefone</p>
          </div>
          <div className="dica-card">
            <h4>📞 Confirme Sempre</h4>
            <p>Ligue diretamente para o banco pelos canais oficiais</p>
          </div>
          <div className="dica-card">
            <h4>🚫 Desconfie</h4>
            <p>Bancos não pedem senhas ou códigos por telefone</p>
          </div>
          <div className="dica-card">
            <h4>⏰ Não se Apresse</h4>
            <p>Golpistas criam senso de urgência. Mantenha a calma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;

