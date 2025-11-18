// Dados fake para testar o front-end antes de conectar com o back-end

export const categorias = [
  { id: 1, nome: 'Falso Banco', descricao: 'Golpista se passa por funcionário do banco' },
  { id: 2, nome: 'Falso Suporte Técnico', descricao: 'Solicita acesso remoto ao computador' },
  { id: 3, nome: 'Prêmio Falso', descricao: 'Informa prêmio falso e solicita pagamento de taxa' },
  { id: 4, nome: 'Sequestro Virtual', descricao: 'Alega sequestro de familiar' },
  { id: 5, nome: 'Empréstimo Falso', descricao: 'Oferece empréstimo com taxa antecipada' },
  { id: 6, nome: 'Golpe do Motoboy', descricao: 'Solicita entrega de cartão via motoboy' },
  { id: 7, nome: 'Clonagem de WhatsApp', descricao: 'Solicita código de verificação do WhatsApp' },
  { id: 8, nome: 'Falsa Central de Atendimento', descricao: 'Se passa pela central do banco' },
  { id: 9, nome: 'Compra Suspeita', descricao: 'Informa compra não reconhecida' },
  { id: 10, nome: 'Atualização Cadastral', descricao: 'Solicita atualização de dados cadastrais' }
];

export const numerosSuspeitos = [
  {
    id: 1,
    numero: '11987654321',
    totalDenuncias: 45,
    nivelRisco: 'critico',
    primeiraDenuncia: '2025-08-15',
    ultimaDenuncia: '2025-10-25'
  },
  {
    id: 2,
    numero: '21912345678',
    totalDenuncias: 38,
    nivelRisco: 'critico',
    primeiraDenuncia: '2025-07-20',
    ultimaDenuncia: '2025-10-24'
  },
  {
    id: 3,
    numero: '11999998888',
    totalDenuncias: 22,
    nivelRisco: 'alto',
    primeiraDenuncia: '2025-09-01',
    ultimaDenuncia: '2025-10-23'
  },
  {
    id: 4,
    numero: '85988887777',
    totalDenuncias: 18,
    nivelRisco: 'alto',
    primeiraDenuncia: '2025-09-10',
    ultimaDenuncia: '2025-10-22'
  },
  {
    id: 5,
    numero: '11977776666',
    totalDenuncias: 12,
    nivelRisco: 'medio',
    primeiraDenuncia: '2025-09-15',
    ultimaDenuncia: '2025-10-20'
  },
  {
    id: 6,
    numero: '47966665555',
    totalDenuncias: 8,
    nivelRisco: 'medio',
    primeiraDenuncia: '2025-09-20',
    ultimaDenuncia: '2025-10-18'
  },
  {
    id: 7,
    numero: '11955554444',
    totalDenuncias: 5,
    nivelRisco: 'medio',
    primeiraDenuncia: '2025-10-01',
    ultimaDenuncia: '2025-10-15'
  },
  {
    id: 8,
    numero: '21944443333',
    totalDenuncias: 3,
    nivelRisco: 'baixo',
    primeiraDenuncia: '2025-10-05',
    ultimaDenuncia: '2025-10-12'
  },
  {
    id: 9,
    numero: '11933332222',
    totalDenuncias: 2,
    nivelRisco: 'baixo',
    primeiraDenuncia: '2025-10-08',
    ultimaDenuncia: '2025-10-10'
  },
  {
    id: 10,
    numero: '85922221111',
    totalDenuncias: 1,
    nivelRisco: 'baixo',
    primeiraDenuncia: '2025-10-10',
    ultimaDenuncia: '2025-10-10'
  }
];

export const denuncias = [
  {
    id: 1,
    numeroId: 1,
    numero: '11987654321',
    nomeDenunciante: 'Maria Silva',
    emailDenunciante: 'maria@email.com',
    descricao: 'Ligaram se passando pelo banco e pedindo minha senha',
    dataHora: '2025-10-25 14:30:00',
    categorias: ['Falso Banco']
  },
  {
    id: 2,
    numeroId: 1,
    numero: '11987654321',
    nomeDenunciante: 'João Santos',
    emailDenunciante: 'joao@email.com',
    descricao: 'Tentaram me enganar dizendo que meu cartão foi clonado',
    dataHora: '2025-10-24 10:15:00',
    categorias: ['Falso Banco', 'Falsa Central de Atendimento']
  },
  {
    id: 3,
    numeroId: 2,
    numero: '21912345678',
    nomeDenunciante: 'Ana Costa',
    emailDenunciante: 'ana@email.com',
    descricao: 'Pediram código do WhatsApp dizendo ser do banco',
    dataHora: '2025-10-24 16:45:00',
    categorias: ['Clonagem de WhatsApp']
  },
  {
    id: 4,
    numeroId: 3,
    numero: '11999998888',
    nomeDenunciante: 'Pedro Oliveira',
    emailDenunciante: 'pedro@email.com',
    descricao: 'Ofereceram empréstimo falso com taxa antecipada',
    dataHora: '2025-10-23 11:20:00',
    categorias: ['Empréstimo Falso']
  },
  {
    id: 5,
    numeroId: 4,
    numero: '85988887777',
    nomeDenunciante: 'Carla Mendes',
    emailDenunciante: 'carla@email.com',
    descricao: 'Disseram que ganhei um prêmio e pediram dinheiro',
    dataHora: '2025-10-22 09:30:00',
    categorias: ['Prêmio Falso']
  }
];

export const estatisticas = {
  totalNumeros: 1234,
  totalDenuncias: 5678,
  numerosCriticos: 89,
  numerosAlto: 156,
  numerosMedio: 345,
  numerosBaixo: 644,
  denunciasPorCategoria: [
    { nome: 'Falso Banco', total: 1234, percentual: 35 },
    { nome: 'Falsa Central', total: 876, percentual: 25 },
    { nome: 'Clonagem WhatsApp', total: 543, percentual: 15 },
    { nome: 'Prêmio Falso', total: 432, percentual: 10 },
    { nome: 'Outros', total: 593, percentual: 15 }
  ]
};

export const formatarTelefone = (numero) => {
  if (!numero) return '';
  const cleaned = numero.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  return numero;
};

export const formatarData = (data) => {
  if (!data) return '';
  const date = new Date(data);
  return date.toLocaleDateString('pt-BR');
};

export const getCorRisco = (nivel) => {
  const cores = {
    critico: '#dc2626',
    alto: '#f59e0b',
    medio: '#eab308',
    baixo: '#10b981'
  };
  return cores[nivel] || '#64748b';
};

export const getLabelRisco = (nivel) => {
  const labels = {
    critico: '🔴 CRÍTICO',
    alto: '🟠 ALTO',
    medio: '🟡 MÉDIO',
    baixo: '🟢 BAIXO'
  };
  return labels[nivel] || nivel.toUpperCase();
};
