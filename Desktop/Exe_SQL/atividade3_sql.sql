CREATE DATABASE db_escola;

USE db_escola;

CREATE TABLE tb_alunos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,	
materia VARCHAR(50) NOT NULL,
nfinal DECIMAL(2,1) NOT NULL,
periodo VARCHAR (50) NOT NULL
);

INSERT INTO tb_alunos (nome, materia, nfinal, periodo) VALUES
("Cátia Aparecida", "Matemática", 8.5, "Manhã"),
("Kaique Fernando", "Física", 6.8, "Manhã"),
("João Victor", "Química", 9.2, "Noite"),
("Victor Henrique", "Biologia", 7.4, "Tarde"),
("Maria Isabel", "Computação", 8.0, "Noite"),
("Rafael Augusto", "Filosofia", 5.5, "Manhã"),
("Antônio Carlos", "Psicologia", 9.0, "Tarde"),
("Beatryz Byanka", "Arte", 7.2, "Noite");

SELECT * FROM tb_alunos WHERE nfinal > 7.0;

SELECT * FROM tb_alunos WHERE nota_final < 7.0;

UPDATE tb_alunos
SET nfinal = 9.5 WHERE nome = "Beatryz Byanka";

SELECT * FROM tb_alunos ORDER BY nfinal DESC;