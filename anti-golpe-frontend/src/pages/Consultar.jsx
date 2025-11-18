import React, { useState } from 'react';
import { FaSearch, FaPhone } from 'react-icons/fa';
import { numerosSuspeitos, denuncias, formatarTelefone, formatarData, getLabelRisco } from '../utils/mockData';
import './Consultar.css';

function Consultar() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);
  const [buscaRealizada, setBuscaRealizada] = useState(false);

  const handleBuscar = (e) => {
    e.preventDefault();
    setBuscaRealizada(true);
    
    const numeroLimpo = numero.replace(/\D/g, '');
    const encontrado = numerosSuspeitos.find(n => n.numero === numeroLimpo);
    
    if (encontrado) {
      const denunciasDoNumero = denuncias.filter(d => d.numero === numeroLimpo);
      setResultado({ ...encontrado, denuncias: denunciasDoNumero });
    } else {
      setResultado(null);
    }
  };

  return (
    <div className="consultar">
      <div className="consultar-header">
        <FaSearch className="page-icon" />
        <h1>Consultar Número</h1>
        <p>Digite o número de telefone para verificar se há denúncias registradas</p>
      </div>

      <form onSubmit={handleBuscar} className="consultar-form">
        <div className="form-group">
          <label htmlFor="numero">
            <FaPhone /> Número de Telefone
          </label>
          <input
            type="text"
            id="numero"
            placeholder="(11) 98765-4321"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <FaSearch /> Buscar
        </button>
      </form>

      {buscaRealizada && (
        <div className="resultado">
          {resultado ? (
            <div className={`resultado-card risco-${resultado.nivelRisco}`}>
              <div className="resultado-header">
                <h2>⚠️ Número Encontrado!</h2>
                <span className="badge-risco-grande">{getLabelRisco(resultado.nivelRisco)}</span>
              </div>

              <div className="resultado-info">
                <h3>{formatarTelefone(resultado.numero)}</h3>
                
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Total de Denúncias:</span>
                    <span className="info-value">{resultado.totalDenuncias}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Primeira Denúncia:</span>
                    <span className="info-value">{formatarData(resultado.primeiraDenuncia)}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Última Denúncia:</span>
                    <span className="info-value">{formatarData(resultado.ultimaDenuncia)}</span>
                  </div>
                </div>
              </div>

              {resultado.denuncias && resultado.denuncias.length > 0 && (
                <div className="denuncias-lista">
                  <h3>📋 Denúncias Registradas</h3>
                  {resultado.denuncias.map((denuncia) => (
                    <div key={denuncia.id} className="denuncia-item">
                      <p className="denuncia-data">{formatarData(denuncia.dataHora)}</p>
                      <p className="denuncia-desc">{denuncia.descricao}</p>
                      <div className="denuncia-categorias">
                        {denuncia.categorias.map((cat, idx) => (
                          <span key={idx} className="categoria-tag">{cat}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="alerta-seguranca">
                <h4>🛡️ Recomendações de Segurança:</h4>
                <ul>
                  <li>Não forneça dados pessoais ou bancários</li>
                  <li>Não clique em links enviados</li>
                  <li>Não faça transferências ou pagamentos</li>
                  <li>Entre em contato diretamente com seu banco pelos canais oficiais</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="resultado-card resultado-limpo">
              <h2>✅ Número Não Encontrado</h2>
              <p>Este número não possui denúncias registradas em nossa base de dados.</p>
              <p className="aviso">Isso não garante que o número seja seguro. Mantenha sempre a cautela!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Consultar;
