const db = require('../database');

exports.listarAlunos = (req, res) => {
    const query = "SELECT * FROM Aluno";
    
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar alunos: " + err.message });
        }
        res.json(rows);
    });
};