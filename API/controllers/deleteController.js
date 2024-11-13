const db = require('../database');

exports.removerItem = (req, res) => {
    console.log(req.body);
    // const itemId = req.params.id;
    // console.log(`Removendo item com ID: ${itemId}`);

    

    const sucesso = true; // Suponha que a remoção foi bem-sucedida

    if (sucesso) {
        res.status(200).json({ mensagem: 'Item removido com sucesso!' });
    } else {
        res.status(500).json({ mensagem: 'Erro ao remover item.' });
    }
};
