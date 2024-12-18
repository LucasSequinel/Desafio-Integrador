const db = require('../database');

exports.removerItem = (req, res) => {
    const itemID = req.body.id;
    const itemTipo = req.body.tipo;
    const sql = `DELETE FROM ${itemTipo} WHERE id= ?`;
    let sucesso;

    console.log(itemID, itemTipo)

    db.run(sql, [itemID], function(err) {
        if (err) {
            console.error('Erro ao remover item:', err.message);
            sucesso = false
        } else {
            console.log(`Item removido com sucesso!`);
            sucesso = true
        }
    });
};
