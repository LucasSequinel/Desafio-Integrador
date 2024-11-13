const express = require('express');
const cors = require('cors');

const alunoController = require('./controllers/alunosController');
const cursoController = require('./controllers/cursosController');
const atividadesController = require('./controllers/atividadesController');
const professoresController = require('./controllers/professoresController');
const insertController = require('./controllers/insertController');

const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/api/alunos', alunoController.listarAlunos);
app.get('/api/cursos', cursoController.listarCursos);
app.get('/api/atividades', atividadesController.listarAtividades);
app.get('/api/professores', professoresController.listarProfessores);

app.post('/api/form', insertController.adicionarDados);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
