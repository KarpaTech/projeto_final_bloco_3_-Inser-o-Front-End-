CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_funcionarios(
id SMALLINT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(77) NOT NULL,
cargo VARCHAR(50) NOT NULL,
salario DECIMAL(7,2) NOT NULL,
data_admissao DATE
);

INSERT INTO tb_funcionarios (nome, cargo, salario, data_admissao) VALUES
("Neuza Sampaio", "Analista de RH",  8000.00, '2021-03-15'),
("Pedro Henrique", "Desenvolvedor Sênior", 12000.00, '2015-01-07'),
("Flavia Aparecida", "Recepcionista", 4800.00, '2023-01-10'),
("Janderson", "Auxiliar de Serviços Gerais", 7500.00, '2016-06-20'),
("Danilo Israel", "Coordenador de RH", 10000.00, '2015-10-06');

SELECT * FROM tb_funcionarios WHERE salario > 5000;

SELECT * FROM tb_funcionarios WHERE salario < 5000;

UPDATE tb_funcionarios
SET cargo = "Chefe de Manutenção", salario = 10000 WHERE id = 9;

SELECT * FROM tb_funcionarios; 



