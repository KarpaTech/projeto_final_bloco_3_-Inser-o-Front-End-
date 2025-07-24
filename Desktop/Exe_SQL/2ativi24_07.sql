CREATE DATABASE db_farmacia_bem_estar;

USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias (
id_categoria INT PRIMARY KEY AUTO_INCREMENT,
nome_categoria VARCHAR(50) NOT NULL,
descricao TEXT NOT NULL
);

CREATE TABLE tb_produtos (
id_produto INT PRIMARY KEY AUTO_INCREMENT,	
nome_produto VARCHAR(100) NOT NULL,
descricao TEXT,
preco DECIMAL(6,2) NOT NULL,
quantidade INT NOT NULL,
fk_categoria INT,
FOREIGN KEY (fk_categoria) REFERENCES tb_categorias(id_categoria)
);

INSERT INTO tb_categorias (nome_categoria, descricao) VALUES
("Medicamentos", "Destinado ao tratamento de doenças"),
("Cosméticos", "Beleza e cuidados pessoais"),
("Higiene", "Higiene pessoal"),
("Suplementos", "Vitaminas e suplementos alimentares"),
("Infantil", "Cuidados a bebês e crianças");

INSERT INTO tb_produtos (nome_produto, descricao, preco, quantidade, fk_categoria) VALUES
('Dipirona 500mg', 'Analgésico e antitérmico', 8.90, 100, 1),
('Protetor Solar FPS 50', 'Proteção solar para pele', 55.00, 30, 2),
('Escova de Dente', 'Higiene bucal', 7.50, 50, 3),
('Ômega 3 1000mg', 'Suplemento alimentar', 65.00, 40, 4),
('Shampoo Infantil', 'Para cabelos delicados de crianças', 18.90, 10, 5),
('Colágeno', 'Melhora da pele e articulações', 120.00, 15, 4),
('Creme Hidratante', 'Hidratação corporal', 22.00, 30, 2),
('Colírio', 'Solução oftálmica líquida', 15.00, 20, 1);

SELECT * FROM tb_produtos WHERE preco > 10.00;

SELECT * FROM tb_produtos WHERE preco BETWEEN 5.00 AND 60.00;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%';

SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.fk_categoria = tb_categorias.id_categoria;
  
SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.fk_categoria = tb_categorias.id_categoria
WHERE  tb_categorias.nome_categoria = "Cosméticos";
