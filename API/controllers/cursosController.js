const db = require('../database');

exports.listarCursos = (req, res) => {
    const query = "SELECT * FROM Curso";
    
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar cursos: " + err.message });
        }
        res.json(rows);
    });
}; 