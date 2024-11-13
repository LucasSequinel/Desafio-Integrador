const db = require('../database');

exports.adicionarDados = (req, res) => {
    const dados = req.body;
    console.log(req.body)

    // Adicione a lógica para salvar os dados no banco de dados

    res.status(200).json({ mensagem: 'Dados recebidos com sucesso!' });
};
