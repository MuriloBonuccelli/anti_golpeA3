USE anti_golpea3_db;

CREATE TABLE categorias_golpe ( -- tipos de golpes conhecidos
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_nome_categoria (nome)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE numeros_suspeitos ( -- tabela dos numeros suspeitos
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_telefone VARCHAR(15) NOT NULL UNIQUE,
    total_denuncias INT DEFAULT 1,
    nivel_risco ENUM('baixo', 'medio', 'alto', 'critico') DEFAULT 'baixo',
    primeira_denuncia TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_denuncia TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ativo BOOLEAN DEFAULT TRUE,
    INDEX idx_numero (numero_telefone),
    INDEX idx_nivel_risco (nivel_risco),
    INDEX idx_total_denuncias (total_denuncias DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE denuncias ( -- tabela de denuncias
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_id INT NOT NULL,
    nome_denunciante VARCHAR(100),
    email_denunciante VARCHAR(100),
    descricao_golpe TEXT NOT NULL,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_origem VARCHAR(45),
    validada BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (numero_id) REFERENCES numeros_suspeitos(id) ON DELETE CASCADE,
    INDEX idx_data_hora (data_hora DESC),
    INDEX idx_numero_id (numero_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE denuncias_categorias ( -- tabela de denuncias por categorais
    denuncia_id INT NOT NULL,
    categoria_id INT NOT NULL,
    PRIMARY KEY (denuncia_id, categoria_id),
    FOREIGN KEY (denuncia_id) REFERENCES denuncias(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias_golpe(id) ON DELETE CASCADE,
    INDEX idx_denuncia (denuncia_id),
    INDEX idx_categoria (categoria_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO categorias_golpe (nome, descricao) VALUES -- inserindo categorias padrões
('Falso Banco', 'Golpista se passa por funcionário do banco solicitando dados pessoais ou senhas'),
('Falso Suporte Técnico', 'Golpista alega ser do suporte técnico e pede acesso remoto ao computador'),
('Prêmio Falso', 'Informa que a vítima ganhou um prêmio e solicita pagamento de taxa ou dados bancários'),
('Sequestro Virtual', 'Alega que um familiar foi sequestrado e exige pagamento de resgate'),
('Empréstimo Falso', 'Oferece empréstimo fácil mas solicita pagamento antecipado de taxas'),
('Golpe do Motoboy', 'Solicita entrega de cartão para um motoboy que irá buscá-lo'),
('Clonagem de WhatsApp', 'Solicita código de verificação do WhatsApp para clonar a conta'),
('Falsa Central de Atendimento', 'Liga se passando pela central de atendimento do banco'),
('Compra Suspeita', 'Informa sobre compra não reconhecida e pede confirmação de dados'),
('Atualização Cadastral', 'Solicita atualização de dados cadastrais por telefone');

INSERT INTO numeros_suspeitos (numero_telefone, total_denuncias, nivel_risco, primeira_denuncia, ultima_denuncia) VALUES -- teste de funcionamento com numeros ficticios na database
('11987654321', 45, 'critico', '2025-01-15 10:30:00', '2025-10-26 15:45:00'),
('11976543210', 32, 'alto', '2025-02-20 14:20:00', '2025-10-25 11:30:00'),
('11965432109', 18, 'alto', '2025-03-10 09:15:00', '2025-10-24 16:20:00'),
('11954321098', 12, 'medio', '2025-04-05 11:40:00', '2025-10-23 10:10:00'),
('11943210987', 8, 'medio', '2025-05-12 13:25:00', '2025-10-22 14:55:00'),
('11932109876', 5, 'baixo', '2025-06-18 16:30:00', '2025-10-21 09:40:00'),
('21987654321', 28, 'alto', '2025-07-22 10:00:00', '2025-10-20 12:15:00'),
('21976543210', 15, 'medio', '2025-08-30 15:45:00', '2025-10-19 17:30:00'),
('85987654321', 22, 'alto', '2025-09-05 08:20:00', '2025-10-18 13:25:00'),
('47987654321', 6, 'baixo', '2025-10-01 12:50:00', '2025-10-17 11:05:00');

INSERT INTO denuncias (numero_id, nome_denunciante, email_denunciante, descricao_golpe, data_hora) VALUES
(1, 'Murilo Bonuccelli', 'murilobonace@gmail.com', 'Ligaram dizendo que minha conta foi invadida e pediram minha senha do banco. Desconfiei e desliguei.', '2025-10-26 15:45:00'),
(1, 'Maria Beatriz de Lima Santos', 'mb1181819@email.com', 'Falso funcionário do Bradesco pediu código SMS. Não passei!', '2025-10-25 10:20:00'),
(2, 'Kaue Dib', 'kauedib@gmail.com', 'Disseram que houve uma compra suspeita no meu cartão e pediram os dados completos.', '2025-10-25 11:30:00'),
(3, 'Ana clara', 'anaclara@gmail.com', 'Ofereceram empréstimo com juros baixos mas pediram pagamento de taxa antecipada.', '2025-10-24 16:20:00'),
(4, 'Carlos Miguel', NULL, 'Ligação automática dizendo que ganhei um prêmio. Pediram meus dados bancários.', '2025-10-23 10:10:00'),
(5, 'Jonathan Calleri', 'Calleri@gmail.com', 'Falso suporte técnico pediu acesso remoto ao meu computador.', '2025-10-22 14:55:00'),
(6, 'Gabreila Goncales', 'ggabi@gmail.com', 'Disseram que precisavam atualizar meu cadastro urgentemente.', '2025-10-21 09:40:00'),
(7, 'Fernand0 Rocha', 'fernandokk@gmail.com', 'Golpe do sequestro virtual. Muito assustador!', '2025-10-20 12:15:00'),
(8, 'Lucaaaaaaaaaas', NULL, 'Pediram código do WhatsApp dizendo que era do banco.', '2025-10-19 17:30:00'),
(9, 'Rodrigo Bossini', 'Rodrigaodagalera@gmail.com', 'Falsa central de atendimento pediu senha do cartão.', '2025-10-18 13:25:00');

INSERT INTO denuncias_categorias (denuncia_id, categoria_id) VALUES -- denuncia por categoria
(1, 1), (1, 8),  -- Falso Banco + Falsa Central
(2, 1), (2, 8),  -- Falso Banco + Falsa Central
(3, 1), (3, 9),  -- Falso Banco + Compra Suspeita
(4, 5),          -- Empréstimo Falso
(5, 3),          -- Prêmio Falso
(6, 2),          -- Falso Suporte Técnico
(7, 10),         -- Atualização Cadastral
(8, 4),          -- Sequestro Virtual
(9, 7),          -- Clonagem WhatsApp
(10, 1), (10, 8); -- Falso Banco + Falsa Central

-- ctes para diferentes visões
CREATE VIEW vw_ranking_numeros AS
SELECT 
    ns.numero_telefone,
    ns.total_denuncias,
    ns.nivel_risco,
    ns.ultima_denuncia,
    COUNT(DISTINCT d.id) as total_relatos
FROM numeros_suspeitos ns
LEFT JOIN denuncias d ON ns.id = d.numero_id
WHERE ns.ativo = TRUE
GROUP BY ns.id
ORDER BY ns.total_denuncias DESC;

CREATE VIEW vw_estatisticas_categorias AS
SELECT 
    cg.nome as categoria,
    COUNT(dc.denuncia_id) as total_denuncias,
    ROUND(COUNT(dc.denuncia_id) * 100.0 / (SELECT COUNT(*) FROM denuncias_categorias), 2) as percentual
FROM categorias_golpe cg
LEFT JOIN denuncias_categorias dc ON cg.id = dc.categoria_id
GROUP BY cg.id
ORDER BY total_denuncias DESC;

CREATE VIEW vw_denuncias_recentes AS
SELECT 
    d.id,
    ns.numero_telefone,
    d.descricao_golpe,
    d.data_hora,
    GROUP_CONCAT(cg.nome SEPARATOR ', ') as categorias
FROM denuncias d
INNER JOIN numeros_suspeitos ns ON d.numero_id = ns.id
LEFT JOIN denuncias_categorias dc ON d.id = dc.denuncia_id
LEFT JOIN categorias_golpe cg ON dc.categoria_id = cg.id
WHERE d.data_hora >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY d.id
ORDER BY d.data_hora DESC;

-- inserção de dados na base

DELIMITER //
CREATE PROCEDURE sp_registrar_denuncia(
    IN p_numero_telefone VARCHAR(15),
    IN p_nome_denunciante VARCHAR(100),
    IN p_email_denunciante VARCHAR(100),
    IN p_descricao TEXT,
    IN p_categoria_id INT
)
BEGIN
    DECLARE v_numero_id INT;
    
    -- verificar se o número já existe
    SELECT id INTO v_numero_id 
    FROM numeros_suspeitos 
    WHERE numero_telefone = p_numero_telefone;
    
    -- se não existir, criar novo registro
    IF v_numero_id IS NULL THEN
        INSERT INTO numeros_suspeitos (numero_telefone, total_denuncias, nivel_risco)
        VALUES (p_numero_telefone, 1, 'baixo');
        SET v_numero_id = LAST_INSERT_ID();
ELSE
        -- se existir, increment neles
        UPDATE numeros_suspeitos 
        SET total_denuncias = total_denuncias + 1,
            ultima_denuncia = CURRENT_TIMESTAMP,
            nivel_risco = CASE
                WHEN total_denuncias + 1 >= 30 THEN 'critico'
                WHEN total_denuncias + 1 >= 15 THEN 'alto'
                WHEN total_denuncias + 1 >= 5 THEN 'medio'
                ELSE 'baixo'
            END
        WHERE id = v_numero_id;
    END IF;
    
    --inserir a denúncia
    INSERT INTO denuncias (numero_id, nome_denunciante, email_denunciante, descricao_golpe)
    VALUES (v_numero_id, p_nome_denunciante, p_email_denunciante, p_descricao);
    
    -- relacionar com categoria
    IF p_categoria_id IS NOT NULL THEN
        INSERT INTO denuncias_categorias (denuncia_id, categoria_id)
        VALUES (LAST_INSERT_ID(), p_categoria_id);
    END IF;
    
    SELECT 'Denúncia registrada com sucesso!' as mensagem;
END //
DELIMITER ;

-- buscar informações do numero
DELIMITER //
CREATE PROCEDURE sp_consultar_numero(
    IN p_numero_telefone VARCHAR(15)
)
BEGIN
 SELECT 
        ns.numero_telefone,
        ns.total_denuncias,
        ns.nivel_risco,
        ns.primeira_denuncia,
        ns.ultima_denuncia,
        COUNT(d.id) as total_relatos
    FROM numeros_suspeitos ns
    LEFT JOIN denuncias d ON ns.id = d.numero_id
    WHERE ns.numero_telefone = p_numero_telefone
    GROUP BY ns.id;
    
    -- ultimas denúncias desse número
    SELECT 
        d.descricao_golpe,
        d.data_hora,
        GROUP_CONCAT(cg.nome SEPARATOR ', ') as categorias
    FROM denuncias d
    INNER JOIN numeros_suspeitos ns ON d.numero_id = ns.id
    LEFT JOIN denuncias_categorias dc ON d.id = dc.denuncia_id
    LEFT JOIN categorias_golpe cg ON dc.categoria_id = cg.id
    WHERE ns.numero_telefone = p_numero_telefone
    GROUP BY d.id
    ORDER BY d.data_hora DESC
    LIMIT 5;
END //
DELIMITER ;

--- trigger de atualizar nivel de risco automaticamente
DELIMITER //
CREATE TRIGGER trg_atualizar_nivel_risco
AFTER INSERT ON denuncias
FOR EACH ROW
BEGIN
    UPDATE numeros_suspeitos
    SET nivel_risco = CASE
        WHEN total_denuncias >= 30 THEN 'critico'
        WHEN total_denuncias >= 15 THEN 'alto'
        WHEN total_denuncias >= 5 THEN 'medio'
        ELSE 'baixo'
    END
    WHERE id = NEW.numero_id;
END //
DELIMITER ;


-- indice de performance (temporario)
CREATE INDEX idx_denuncias_validada ON denuncias(validada);
CREATE INDEX idx_numeros_ativo ON numeros_suspeitos(ativo);

-- comentarios sobre oq são as tabelas (ta facil de saber pelo nome)
ALTER TABLE categorias_golpe COMMENT = 'Armazena os tipos de golpes telefônicos conhecidos';
ALTER TABLE numeros_suspeitos COMMENT = 'Números de telefone reportados como suspeitos de golpe';
ALTER TABLE denuncias COMMENT = 'Registros individuais de denúncias de tentativas de golpe';
ALTER TABLE denuncias_categorias COMMENT = 'Relacionamento entre denúncias e categorias de golpe';