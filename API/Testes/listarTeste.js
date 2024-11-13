const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/banco.sqlite', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados banco.sqlite');
    }
});

const listarAlunos = () => {
    const sql = `SELECT * FROM Aluno`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao listar alunos:', err.message);
        } else {
            console.log('Alunos:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
};

const listarCursos = () => {
    const sql = `SELECT * FROM Curso`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao listar cursos:', err.message);
        } else {
            console.log('Cursos:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
};

const listarMatriculas = () => {
    const sql = `SELECT * FROM Matricula`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao listar matrículas:', err.message);
        } else {
            console.log('Matrículas:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
};

const listarAtividades = () => {
    const sql = `SELECT * FROM Atividade`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao listar atividades:', err.message);
        } else {
            console.log('Atividades:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
};

const listarAlunoAtividades = () => {
    const sql = `SELECT * FROM Aluno_Atividade`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao listar aluno-atividade:', err.message);
        } else {
            console.log('Aluno-Atividades:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
};

const listarProfessores = () => {
    const sql = `SELECT * FROM Professor`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao listar professores:', err.message);
        } else {
            console.log('Professores:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
};

const listarProfessorAtividades = () => {
    const sql = `SELECT * FROM Professor_Atividade`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Erro ao listar professor-atividade:', err.message);
        } else {
            console.log('Professor-Atividades:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
};

const listarTodos = () => {
    listarAlunos();
    listarCursos();
    listarMatriculas();
    listarAtividades();
    listarAlunoAtividades();
    listarProfessores();
    listarProfessorAtividades();
};

listarTodos();

db.close((err) => {
    if (err) {
        console.error('Erro ao fechar o banco de dados:', err.message);
    } else {
        console.log('Banco de dados fechado.');
    }
});
