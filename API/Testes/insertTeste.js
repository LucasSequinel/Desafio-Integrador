const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../database/banco.sqlite', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados banco.sqlite');
    }
});

const inserirAluno = (usuario, senha, nome, email, data_nascimento, descricao) => {
    const sql = `INSERT INTO Aluno (usuario, senha, nome, email, data_nascimento, descricao) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(sql, [usuario, senha, nome, email, data_nascimento, descricao], function(err) {
        if (err) {
            console.error('Erro ao inserir aluno:', err.message);
        } else {
            console.log(`Aluno inserido com sucesso! ID: ${this.lastID}`);
        }
    });
};

const inserirCurso = (total_periodos, nome) => {
    const sql = `INSERT INTO Curso (total_periodos, nome) VALUES (?, ?)`;
    db.run(sql, [total_periodos, nome], function(err) {
        if (err) {
            console.error('Erro ao inserir curso:', err.message);
        } else {
            console.log(`Curso inserido com sucesso! ID: ${this.lastID}`);
        }
    });
};

const inserirMatricula = (fk_Aluno_id, fk_Curso_id, data) => {
    const sql = `INSERT INTO Matricula (fk_Aluno_id, fk_Curso_id, data) VALUES (?, ?, ?)`;
    db.run(sql, [fk_Aluno_id, fk_Curso_id, data], function(err) {
        if (err) {
            console.error('Erro ao inserir matrícula:', err.message);
        } else {
            console.log(`Matrícula inserida com sucesso!`);
        }
    });
};

const inserirAtividade = (titulo, descricao, data, tipo) => {
    const sql = `INSERT INTO Atividade (titulo, descricao, data, tipo) VALUES (?, ?, ?, ?)`;
    db.run(sql, [titulo, descricao, data, tipo], function(err) {
        if (err) {
            console.error('Erro ao inserir atividade:', err.message);
        } else {
            console.log(`Atividade inserida com sucesso! ID: ${this.lastID}`);
        }
    });
};

const inserirAlunoAtividade = (papel, fk_Atividade_id, fk_Aluno_id, aceite) => {
    const sql = `INSERT INTO Aluno_Atividade (papel, fk_Atividade_id, fk_Aluno_id, aceite) VALUES (?, ?, ?, ?)`;
    db.run(sql, [papel, fk_Atividade_id, fk_Aluno_id, aceite], function(err) {
        if (err) {
            console.error('Erro ao inserir aluno na atividade:', err.message);
        } else {
            console.log(`Aluno inserido na atividade com sucesso!`);
        }
    });
};

const inserirProfessor = (nome, descricao) => {
    const sql = `INSERT INTO Professor (nome, descricao) VALUES (?, ?)`;
    db.run(sql, [nome, descricao], function(err) {
        if (err) {
            console.error('Erro ao inserir professor:', err.message);
        } else {
            console.log(`Professor inserido com sucesso! ID: ${this.lastID}`);
        }
    });
};

const inserirProfessorAtividade = (fk_Professor_id, fk_Atividade_id) => {
    const sql = `INSERT INTO Professor_Atividade (fk_Professor_id, fk_Atividade_id) VALUES (?, ?)`;
    db.run(sql, [fk_Professor_id, fk_Atividade_id], function(err) {
        if (err) {
            console.error('Erro ao inserir professor na atividade:', err.message);
        } else {
            console.log(`Professor inserido na atividade com sucesso!`);
        }
    });
};

db.serialize(() => {
    inserirAluno('jose.silva', 'senha123', 'José Silva', 'jose@email.com', '1990-03-15', 'Aluno de TI');
    inserirCurso(8, 'Ciência da Computação');
    inserirAtividade('Atividade 1', 'Descrição da atividade 1', '2024-11-13', 1);
    inserirProfessor('Prof. Ana Costa', 'Professora de Programação');
    inserirMatricula(1, 1, '2024-11-13');
    inserirAlunoAtividade('Participante', 1, 1, true);
    inserirProfessorAtividade(1, 1);
});

db.close((err) => {
    if (err) {
        console.error('Erro ao fechar o banco de dados:', err.message);
    } else {
        console.log('Banco de dados fechado.');
    }
});
