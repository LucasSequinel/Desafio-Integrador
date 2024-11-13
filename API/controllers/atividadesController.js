const db = require('../database');

exports.listarAtividades = (req, res) => {
    const query = "SELECT * FROM Atividade";
    
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar atividades: " + err.message });
        }
        res.json(rows);
    });
};