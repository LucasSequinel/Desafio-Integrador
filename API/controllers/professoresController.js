const db = require('../database');

exports.listarProfessores = (req, res) => {
    const query = "SELECT * FROM Professor";
    
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar professores: " + err.message });
        }
        res.json(rows);
    });
};