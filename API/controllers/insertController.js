const db = require('../database');

exports.adicionarDados = (req, res) => {
    const dados = req.body;
    let sql;
    let params;

    switch (dados.tipo) {
        case "Curso":
            sql = "INSERT INTO Curso (total_periodos, nome) VALUES (?, ?)"
            params = [dados.courseDuration, dados.teacherName]
            break;
        case "Professor":
            sql = "INSERT INTO Professor (nome, descricao) VALUES (?, ?)"
            params = [dados.teacherName, dados.teacherDesc]
            break;
        case "Atividade":
            sql = "INSERT INTO Atividade (titulo, descricao, data, tipo) VALUES (?, ?, ?, ?)"
            params = [dados.activityTitle, dados.activityDesc, "2024-11-13", dados.activityType]
            break;
    }

    if (dados != undefined)
        db.run(sql, params, function(err) {
            if (err) {
                console.error(`Erro ao inserir ${dados.tipo}:`, err.message);
            } else {
                console.log(`${dados.tipo} inserido com sucesso! ID: ${this.lastID}`);
            }
        });

    res.status(200).json({ mensagem: 'Dados recebidos com sucesso!' });
};
