const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, './database/banco.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
    } else {
        console.log("Conectado ao banco de dados SQLite.");
        createTables();
    }
});

function createTables() {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS Aluno (
                usuario VARCHAR(100) NOT NULL,
                senha VARCHAR(100) NOT NULL,
                nome VARCHAR(500) NOT NULL,
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email VARCHAR(200),
                data_nascimento DATE,
                descricao VARCHAR(2000)
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Curso (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                total_periodos INT,
                nome VARCHAR(500)
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Matricula (
                fk_Aluno_id INT,
                fk_Curso_id INT,
                data DATE,
                PRIMARY KEY (fk_Aluno_id, fk_Curso_id),
                FOREIGN KEY (fk_Aluno_id) REFERENCES Aluno(id) ON DELETE RESTRICT,
                FOREIGN KEY (fk_Curso_id) REFERENCES Curso(id) ON DELETE RESTRICT
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Atividade (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR(200),
                descricao VARCHAR(500),
                data DATE,
                tipo INT
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Aluno_Atividade (
                papel VARCHAR(200),
                fk_Atividade_id INT,
                fk_Aluno_id INT,
                aceite BOOLEAN,
                PRIMARY KEY (fk_Atividade_id, fk_Aluno_id),
                FOREIGN KEY (fk_Atividade_id) REFERENCES Atividade(id) ON DELETE CASCADE,
                FOREIGN KEY (fk_Aluno_id) REFERENCES Aluno(id) ON DELETE CASCADE
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Professor (
                nome VARCHAR(500),
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                descricao VARCHAR(500)
            )
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Professor_Atividade (
                fk_Professor_id INT,
                fk_Atividade_id INT,
                PRIMARY KEY (fk_Professor_id, fk_Atividade_id),
                FOREIGN KEY (fk_Professor_id) REFERENCES Professor(id) ON DELETE RESTRICT,
                FOREIGN KEY (fk_Atividade_id) REFERENCES Atividade(id) ON DELETE RESTRICT
            )
        `);

        console.log("Tabelas criadas/verificadas com sucesso!");
    });
}

module.exports = db;