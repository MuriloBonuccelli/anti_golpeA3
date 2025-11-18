import React from 'react';
import { formatarTelefone, formatarData, getLabelRisco } from '../utils/mockData';
import './CardNumero.css';

function CardNumero({ numero }) {
  return (
    <div className={`card-numero risco-${numero.nivelRisco}`}>
      <div className="card-header">
        <h3>{formatarTelefone(numero.numero)}</h3>
        <span className="badge-risco">{getLabelRisco(numero.nivelRisco)}</span>
      </div>
      
      <div className="card-body">
        <div className="info-row">
          <span className="label">Total de Denúncias:</span>
          <span className="value">{numero.totalDenuncias}</span>
        </div>
        
        <div className="info-row">
          <span className="label">Primeira Denúncia:</span>
          <span className="value">{formatarData(numero.primeiraDenuncia)}</span>
        </div>
        
        <div className="info-row">
          <span className="label">Última Denúncia:</span>
          <span className="value">{formatarData(numero.ultimaDenuncia)}</span>
        </div>
      </div>
    </div>
  );
}

export default CardNumero;
