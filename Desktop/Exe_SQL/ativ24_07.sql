CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

CREATE TABLE tb_classes(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
funcao VARCHAR (50) NOT NULL,
tipo_ataque VARCHAR (100) NOT NULL
);

CREATE TABLE tb_avatar(
id_avatar BIGINT AUTO_INCREMENT PRIMARY KEY,
id_classe BIGINT,
nome_avatar VARCHAR (100) NOT NULL,
funcao VARCHAR (50) NOT NULL,
nivel INT NOT NULL,
ataque INT NOT NULL,
defesa INT NOT NULL
);

ALTER TABLE tb_avatar ADD CONSTRAINT fk_avatar_classes
FOREIGN KEY (id_classe) REFERENCES tb_classes (id);

INSERT INTO tb_classes (funcao, tipo_ataque) VALUES
("Guerreiro", "Corpo a Corpo"),
("Mago", "Mágico"),
("Arqueiro", "À Distância"),
("Assassino", "Furtivo"),
("Tanque", "Defensor"
);

INSERT INTO tb_avatar( id_classe, nome_avatar, funcao, nivel, ataque, defesa) VALUES
(1,"Kountry", "Arqueiro", 18, 35, 12),
(2,"Moncler", "Curandeira", 12, 8, 11),
(3,"Taurus", "Assassino", 22, 45, 8),
(4,"Blanka", "Guerreiro", 11, 38, 22),
(5,"Donatello", "Mago", 10, 33, 15),
(4,"Cassandra", "Guerreira", 33, 57, 34),
(5,"Bradock", "Tanque", 2100, 15, 33 ),
(2,"Double B", "Curandeiro", 17, 13, 17 );

SELECT * FROM tb_avatar WHERE ataque > 10;

SELECT * FROM tb_avatar WHERE defesa BETWEEN 10 AND 20;

SELECT * FROM tb_avatar WHERE nome_avatar LIKE "%C%";

SELECT * FROM tb_avatar INNER JOIN tb_classes
ON tb_avatar.id_classe = tb_classes.id;

SELECT * FROM tb_avatar INNER JOIN tb_classes
ON tb_avatar.id_classe = tb_classes.id WHERE tb_classes.funcao = "Arqueiro"

