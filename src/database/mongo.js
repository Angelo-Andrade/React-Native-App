const mongoose = require('mongoose');

const connectionString = 'mongodb://reactnativeproject_determine:d748656653ec7ed66cd614cd2f97a3f5c047967d@or3n2.h.filess.io:61004/reactnativeproject_determine';
let databaseConnection = false;

mongoose.connect(connectionString)
    .then(() => {
        console.log('MongoDB conectado')
        databaseConnection = true;
    }).catch(err => {
        console.log('Erro ao conectar no MongoDB:', err);
        databaseConnection = false;
    });

const gastoSchema = new mongoose.Schema({
    descricao: String,
    valor: Number,
    categoria: String,
});

const Gasto = mongoose.model('Gasto', gastoSchema);

async function criarGasto({ descricao, valor, categoria }) {
    const novoGasto = new Gasto({ descricao, valor, categoria });
    return await novoGasto.save();
}

async function listarHistorico() {
    return await Gasto.find();
}

async function obterTotalPorCategoria(categoria) {
  const resultado = await Gasto.aggregate([
    { $match: { categoria } },
    { $group: { _id: null, total: { $sum: "$valor" } } }
  ]);

  return resultado[0]?.total || 0;
}

async function statusBanco() {
    return databaseConnection;
}

module.exports = {
    criarGasto,
    listarHistorico,
    statusBanco,
    obterTotalPorCategoria,
};
