const express = require('express');
const cors = require('cors');
const alunoController = require('./controllers/alunosController');
const cursoController = require('./controllers/cursosController');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/alunos', alunoController.listarAlunos);
app.get('/api/cursos', cursoController.listarCursos);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
