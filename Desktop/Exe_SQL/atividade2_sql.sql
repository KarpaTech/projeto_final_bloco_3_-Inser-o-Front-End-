CREATE DATABASE db_ecommerce;

USE db_ecommerce ;

CREATE TABLE tb_mercadoria(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
preco DECIMAL(9,2) NOT NULL,
estoque BIGINT NOT NULL,
categoria VARCHAR(50) NOT NULL
);

INSERT INTO tb_mercadoria (nome, preco, estoque, categoria) VALUES
("Notebook ", 3800.00, 10, "Informática"),
("Smartphone", 2800.00, 15, "Eletrônicos"),
("Fone Bluetooth JBL", 450.00, 30, "Áudio"),
("Monitor 20", 490.00, 12, "Informática"),
("Teclado Mecânico", 390.00, 20, "Periféricos"),
("Cadeira Gamer", 1300.00, 8, "Móveis"),
("Mouse sem fio ", 120.00, 25, "Periféricos"),
("HD Externo 1TB",  510.00, 18, "Armazenamento");

SELECT * FROM tb_mercadoria WHERE preco > 500;

SELECT * FROM tb_mercadoria WHERE preco < 500;

UPDATE tb_mercadoria
SET preco = 3000 WHERE id >= 5; 

SELECT * FROM tb_mercadoria;