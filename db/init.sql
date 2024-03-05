CREATE DATABASE IF NOT EXISTS descomplica CHARACTER SET utf8mb4;

USE descomplica;

CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO alunos (nome, cpf, email) VALUES ('Milena Campos', '215.739.840-60', 'milena.campos@gmail.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Vitor Teixeira', '642.813.079-31', 'vitor.teixeira@outlook.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Luna Lima', '685.014.792-76', 'luna.lima69@yahoo.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Maysa Cardoso', '914.708.253-41', 'maysa.cardoso@gmail.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Joao da Rosa', '192.047.358-05', 'joao.rosa@outlook.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Theo Gomes', '479.821.630-50', 'theo.gomes@yahoo.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Lucca Carvalho', '489.716.025-11', 'lucca.carvalho85@dscomplica.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Luiza Novaes', '281.736.590-95', 'luiza.novaes40@gmail.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Augusto da Rosa', '127.389.450-23', 'augusto.rosa@hotmail.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Sofia Lima', '546.810.297-85', 'sofia.lima@yahoo.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Pietra Moraes', '082.974.615-30', 'pietra.moraes84@gmail.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Isis Teixeira', '406.158.732-35', 'isis.teixeira54@descomplica.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Julia Campos', '684.129.075-58', 'julia.campos29@descomplica.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Henrique Correia', '718.249.563-55', 'henrique.correia69@descomplica.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Natalia Barros', '958.712.604-11', 'natalia.barros31@gmail.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Bruno Novaes', '130.284.765-17', 'bruno.novaes80@yahoo.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Emanuelly Souza', '610.542.893-60', 'emanuelly.souza@outlook.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Ana Julia Araujo', '791.560.283-77', 'ana.araujo74@mail.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Lais Pereira', '635.271.490-07', 'lais.pereira@descomplica.com');
INSERT INTO alunos (nome, cpf, email) VALUES ('Renan Pires', '048.762.395-92', 'renan.pires@descomplica.com');