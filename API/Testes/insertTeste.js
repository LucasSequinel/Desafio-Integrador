const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database/banco.sqlite', (err) => {
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
    // Inserindo mais alunos
    inserirAluno('jose.silva', 'senha123', 'José Silva', 'jose@email.com', '1990-03-15', 'Aluno de TI');
    inserirAluno('maria.oliveira', 'senha321', 'Maria Oliveira', 'maria@email.com', '1992-06-21', 'Aluno de Engenharia');
    inserirAluno('luan.santos', 'senha456', 'Luan Santos', 'luan@email.com', '1995-11-10', 'Aluno de Direito');
    inserirAluno('lucas.pereira', 'senha789', 'Lucas Pereira', 'lucas@email.com', '1994-02-14', 'Aluno de Medicina');
    inserirAluno('carla.martins', 'senha101', 'Carla Martins', 'carla@email.com', '1993-07-08', 'Aluno de Psicologia');
    inserirAluno('ana.souza', 'senha112', 'Ana Souza', 'ana@email.com', '1996-04-25', 'Aluno de Biologia');
    inserirAluno('joao.gomes', 'senha131', 'João Gomes', 'joao@email.com', '1997-09-17', 'Aluno de Matemática');
    inserirAluno('paula.silva', 'senha415', 'Paula Silva', 'paula@email.com', '1990-01-30', 'Aluno de Química');
    inserirAluno('ricardo.rodrigues', 'senha161', 'Ricardo Rodrigues', 'ricardo@email.com', '1989-12-05', 'Aluno de Física');
    inserirAluno('gabriela.fernandes', 'senha181', 'Gabriela Fernandes', 'gabriela@email.com', '1998-03-03', 'Aluno de Letras');

    // Inserindo mais cursos
    inserirCurso(8, 'Ciência da Computação');
    inserirCurso(9, 'Engenharia de Software');
    inserirCurso(10, 'Direito');
    inserirCurso(11, 'Medicina');
    inserirCurso(12, 'Psicologia Clínica');
    inserirCurso(13, 'Biologia Marinha');
    inserirCurso(14, 'Matemática Aplicada');
    inserirCurso(15, 'Química Industrial');
    inserirCurso(16, 'Física Teórica');
    inserirCurso(17, 'Letras - Literatura Brasileira');

    // Inserindo mais atividades
    inserirAtividade('Desenvolvimento de Algoritmos', 'Criação de algoritmos para otimização de sistemas de gestão', '2024-11-14', 1);
    inserirAtividade('Estudo de Casos Jurídicos', 'Análise de jurisprudência e elaboração de pareceres legais', '2024-11-15', 2);
    inserirAtividade('Simulação de Atendimento Médico', 'Simulação de atendimento a pacientes com sintomas diversos', '2024-11-16', 3);
    inserirAtividade('Abordagens Psicoterapêuticas', 'Estudo de técnicas de intervenção psicoterapêuticas em transtornos de ansiedade', '2024-11-17', 4);
    inserirAtividade('Pesquisa de Biodiversidade Marinha', 'Análise da fauna e flora em ambientes marinhos', '2024-11-18', 5);
    inserirAtividade('Equações Diferenciais Aplicadas', 'Resolução de problemas complexos em física utilizando equações diferenciais', '2024-11-19', 6);
    inserirAtividade('Sistemas de Controle em Engenharia', 'Desenvolvimento de sistemas de controle automatizados em processos industriais', '2024-11-20', 7);
    inserirAtividade('Química de Materiais Avançados', 'Estudo das propriedades físicas e químicas de materiais inovadores', '2024-11-21', 8);
    inserirAtividade('Teoria da Relatividade e Cosmologia', 'Estudo das leis fundamentais que governam o universo, incluindo a teoria da relatividade de Einstein', '2024-11-22', 9);
    inserirAtividade('Análise Literária de Machado de Assis', 'Leitura e análise das obras de Machado de Assis com foco em sua contribuição para a literatura brasileira', '2024-11-23', 10);

    // Inserindo mais professores
    inserirProfessor('Prof. Ana Costa', 'Professora de Programação e Estruturas de Dados');
    inserirProfessor('Prof. João Lima', 'Professor de Cálculo Diferencial e Integral');
    inserirProfessor('Prof. Larissa Alves', 'Professora de Química Orgânica e Inorgânica');
    inserirProfessor('Prof. Marcos Oliveira', 'Professor de Física Experimental e Teórica');
    inserirProfessor('Prof. Julia Pereira', 'Professora de Psicologia Cognitiva');
    inserirProfessor('Prof. Bruno Silva', 'Professor de História Contemporânea');
    inserirProfessor('Prof. Mariana Rodrigues', 'Professora de Filosofia e Ética');
    inserirProfessor('Prof. Rodrigo Santos', 'Professor de Geografia Humana');
    inserirProfessor('Prof. Carolina Machado', 'Professora de Direito Constitucional');
    inserirProfessor('Prof. Pedro Gomes', 'Professor de Engenharia de Software e Arquitetura de Sistemas');

    // Inserindo mais matrículas
    inserirMatricula(1, 1, '2024-11-13');
    inserirMatricula(2, 2, '2024-11-14');
    inserirMatricula(3, 3, '2024-11-15');
    inserirMatricula(4, 4, '2024-11-16');
    inserirMatricula(5, 5, '2024-11-17');
    inserirMatricula(6, 6, '2024-11-18');
    inserirMatricula(7, 7, '2024-11-19');
    inserirMatricula(8, 8, '2024-11-20');
    inserirMatricula(9, 9, '2024-11-21');
    inserirMatricula(10, 10, '2024-11-22');

    // Inserindo mais alunos em atividades
    inserirAlunoAtividade('Participante Ativo', 1, 1, true);
    inserirAlunoAtividade('Participante Ativo', 2, 2, true);
    inserirAlunoAtividade('Participante Passivo', 3, 3, false);
    inserirAlunoAtividade('Participante Ativo', 4, 4, true);
    inserirAlunoAtividade('Participante Passivo', 5, 5, false);
    inserirAlunoAtividade('Participante Ativo', 6, 6, true);
    inserirAlunoAtividade('Participante Passivo', 7, 7, false);
    inserirAlunoAtividade('Participante Ativo', 8, 8, true);
    inserirAlunoAtividade('Participante Passivo', 9, 9, false);
    inserirAlunoAtividade('Participante Ativo', 10, 10, true);

    // Inserindo mais professores em atividades
    inserirProfessorAtividade(1, 1);
    inserirProfessorAtividade(2, 2);
    inserirProfessorAtividade(3, 3);
    inserirProfessorAtividade(4, 4);
    inserirProfessorAtividade(5, 5);
    inserirProfessorAtividade(6, 6);
    inserirProfessorAtividade(7, 7);
    inserirProfessorAtividade(8, 8);
    inserirProfessorAtividade(9, 9);
    inserirProfessorAtividade(10, 10);
});


db.close((err) => {
    if (err) {
        console.error('Erro ao fechar o banco de dados:', err.message);
    } else {
        console.log('Banco de dados fechado.');
    }
});
