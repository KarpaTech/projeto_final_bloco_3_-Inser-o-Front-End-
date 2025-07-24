CREATE DATABASE db_cidade_dos_vegetais;

USE db_cidade_dos_vegetais;

CREATE TABLE tb_categorias (
id_categ INT PRIMARY KEY AUTO_INCREMENT,
nome_categ VARCHAR(50) NOT NULL,
area VARCHAR(50) NOT NULL
);

CREATE TABLE tb_produtos (
id_produto INT PRIMARY KEY AUTO_INCREMENT,
nome_produto VARCHAR(100) NOT NULL,
descricao TEXT,
preco DECIMAL(5,2) NOT NULL,
estoque INT NOT NULL,
fk_categoria INT
);

ALTER TABLE tb_produtos ADD CONSTRAINT fk_categorias_produtos 
FOREIGN KEY (fk_categoria) REFERENCES tb_categorias (id_categ);


INSERT INTO tb_categorias (nome_categ, area) VALUES
('Frutas', 'Alimentos Frescos'),
('Verduras', 'Folhagens'),
('Legumes', 'Vegetais'),
('Raízes', 'Tubérculos'),
('Orgânicos', 'Produtos Naturais');

INSERT INTO tb_produtos (nome_produto, descricao, preco, estoque, fk_categoria) VALUES
('Maçã Gala', 'Fruta doce e crocante', 9.50, 200, 1),
('Alface Crespa', 'Verdura rica em fibras', 3.50, 150, 2),
('Cenoura', 'Legume rico em vitamina A', 4.90, 180, 3),
('Batata Inglesa', 'Raiz muito utilizada em diversas receitas', 5.20, 250, 4),
('Banana Prata', 'Fruta energética', 7.80, 220, 1),
('Espinafre Orgânico', 'Folha verde rica em ferro', 6.00, 100, 5),
('Abobrinha', 'Legume leve e versátil', 4.70, 160, 3),
('Coco Verde', 'Fruta tropical hidratante', 6.50, 80, 1);

SELECT * FROM tb_produtos WHERE preco > 50.00;

SELECT * FROM tb_produtos WHERE preco BETWEEN 50.00 AND 150.00;

SELECT * FROM tb_produtos WHERE nome_produto LIKE '%C%';

SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.fk_categoria = tb_categorias.id_categ;

SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.fk_categoria = tb_categorias.id_categ
WHERE  tb_categorias.nome_categ =("Frutas");