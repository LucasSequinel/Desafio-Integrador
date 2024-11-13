CREATE TABLE Aluno (
    usuario VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    nome VARCHAR(500) NOT NULL,
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(200),
    data_nascimento DATE,
    descricao VARCHAR(2000)
);

CREATE TABLE Curso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    total_periodos INT,
    nome VARCHAR(500)
);

CREATE TABLE Matricula (
    fk_Aluno_id INT,
    fk_Curso_id INT,
    data DATE,
    PRIMARY KEY (fk_Aluno_id, fk_Curso_id),
    FOREIGN KEY (fk_Aluno_id) REFERENCES Aluno(id) ON DELETE RESTRICT,
    FOREIGN KEY (fk_Curso_id) REFERENCES Curso(id) ON DELETE RESTRICT
);

CREATE TABLE Atividade (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(200),
    descricao VARCHAR(500),
    data DATE,
    tipo INT
);

CREATE TABLE Aluno_Atividade (
    papel VARCHAR(200),
    fk_Atividade_id INT,
    fk_Aluno_id INT,
    aceite BOOLEAN,
    PRIMARY KEY (fk_Atividade_id, fk_Aluno_id),
    FOREIGN KEY (fk_Atividade_id) REFERENCES Atividade(id) ON DELETE CASCADE,
    FOREIGN KEY (fk_Aluno_id) REFERENCES Aluno(id) ON DELETE CASCADE
);

CREATE TABLE Professor (
    nome VARCHAR(500),
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao VARCHAR(500)
);

CREATE TABLE Professor_Atividade (
    fk_Professor_id INT,
    fk_Atividade_id INT,
    PRIMARY KEY (fk_Professor_id, fk_Atividade_id),
    FOREIGN KEY (fk_Professor_id) REFERENCES Professor(id) ON DELETE RESTRICT,
    FOREIGN KEY (fk_Atividade_id) REFERENCES Atividade(id) ON DELETE RESTRICT
);
