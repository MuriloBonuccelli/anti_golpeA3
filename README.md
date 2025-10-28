Sistema de banco de dados para registro e consulta de números suspeitos de golpes telefônicos.

---

## Como Rodar

### *Pré-requisitos:*
- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado

### *Passo a Passo:*

1. *Clone o projeto*
   git clone https://github.com/MuriloBonuccelli/anti_golpeA3.git
   cd anti-golpe-db

2. *Inicie os containers*
docker-compose up -d

3. *Acesse no navegador*
   http://localhost:8080
   
Faça login com:
Servidor: mysql
Usuário: admin
Senha: murilo2012
Banco: anti_golpea3_db

Se quiser parar o Servidor
docker-compose down

O que tem no banco
- 10 categorias de golpes
- 10 números suspeitos
- 10 denúncias gravadas
- ctes, procedures e triggers
10 números suspeitos de exemplo
10 denúncias registradas
Views, procedures e triggers configurados
