import React, { useState } from 'react';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { categorias } from '../utils/mockData';
import './Denunciar.css';

function Denunciar() {
  const [formData, setFormData] = useState({
    numero: '',
    nome: '',
    email: '',
    descricao: '',
    categoriasSelecionadas: []
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoriaChange = (categoriaId) => {
    setFormData(prev => {
      const categorias = prev.categoriasSelecionadas.includes(categoriaId)
        ? prev.categoriasSelecionadas.filter(id => id !== categoriaId)
        : [...prev.categoriasSelecionadas, categoriaId];
      
      return { ...prev, categoriasSelecionadas: categorias };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você faria a chamada para a API
    console.log('Denúncia enviada:', formData);
    
    // Simular envio
    setEnviado(true);
    
    // Resetar formulário após 3 segundos
    setTimeout(() => {
      setFormData({
        numero: '',
        nome: '',
        email: '',
        descricao: '',
        categoriasSelecionadas: []
      });
      setEnviado(false);
    }, 3000);
  };

  if (enviado) {
    return (
      <div className="denunciar">
        <div className="sucesso-card">
          <FaCheckCircle className="sucesso-icon" />
          <h2>✅ Denúncia Enviada com Sucesso!</h2>
          <p>Obrigado por contribuir com a segurança de todos.</p>
          <p>Sua denúncia foi registrada e ajudará a proteger outras pessoas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="denunciar">
      <div className="denunciar-header">
        <FaExclamationTriangle className="page-icon" />
        <h1>Fazer Denúncia</h1>
        <p>Ajude a proteger outras pessoas denunciando números suspeitos</p>
      </div>

      <form onSubmit={handleSubmit} className="denunciar-form">
        <div className="form-group">
          <label htmlFor="numero">Número Suspeito *</label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="(11) 98765-4321"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nome">Seu Nome *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Maria Silva"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Seu E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição do Golpe *</label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva o que aconteceu... Ex: Ligaram se passando pelo banco e pediram minha senha"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de Golpe (selecione um ou mais)</label>
          <div className="categorias-grid">
            {categorias.map(categoria => (
              <div key={categoria.id} className="categoria-checkbox">
                <input
                  type="checkbox"
                  id={`cat-${categoria.id}`}
                  checked={formData.categoriasSelecionadas.includes(categoria.id)}
                  onChange={() => handleCategoriaChange(categoria.id)}
                />
                <label htmlFor={`cat-${categoria.id}`}>
                  <strong>{categoria.nome}</strong>
                  <span>{categoria.descricao}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="alerta-privacidade">
          <p>🔒 Seus dados serão mantidos em sigilo e usados apenas para fins estatísticos.</p>
        </div>

        <button type="submit" className="btn btn-danger">
          <FaExclamationTriangle /> Enviar Denúncia
        </button>
      </form>
    </div>
  );
}

export default Denunciar;
