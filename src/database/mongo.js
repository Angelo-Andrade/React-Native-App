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

const perfilSchema = new mongoose.Schema({
  nome: String,
  email: String,
  imagemUri: String
});

const Perfil = mongoose.model('Perfil', perfilSchema);
const Gasto = mongoose.model('Gasto', gastoSchema);

async function criarGasto({ descricao, valor, categoria }) {
    valor = valor*100;
    const novoGasto = new Gasto({ descricao, valor, categoria });
    return await novoGasto.save();
}

async function listarHistorico() {
  const gastos = await Gasto.find();
  return gastos.map(g => ({
    ...g.toObject(),
    valor: (g.valor / 100).toFixed(2) // retorna string "11.90"
  }));
}

async function obterTotalPorCategoria(categoria) {
  const resultado = await Gasto.aggregate([
    { $match: { categoria } },
    { $group: { _id: null, total: { $sum: "$valor" } } }
  ]);

  return (resultado[0]?.total)/100 || 0;
}

async function obterSaldo() {
  const resultado = await Gasto.aggregate([
    {
      $group: {
        _id: null,
        total: {
          $sum: {
            $cond: [
              { $eq: ["$categoria", "receita"] },
              "$valor",
              { $multiply: ["$valor", -1] } // transforma gasto em valor negativo
            ]
          }
        }
      }
    }
  ]);

  return (resultado[0]?.total || 0) / 100;
}

async function statusBanco() {
    return databaseConnection;
}

async function salvarPerfil({ nome, email, imagemUri }) {
    console.log(imagemUri);
    const perfil = await Perfil.findOneAndUpdate(
        {},
        { nome, email, imagemUri },
        { upsert: true, new: true }
    );
    return perfil;
}

async function obterPerfil() {
  const perfil = await Perfil.findOne();
  return perfil;
}


module.exports = {
    criarGasto,
    listarHistorico,
    statusBanco,
    obterTotalPorCategoria,
    salvarPerfil,
    obterPerfil,
    obterSaldo
};
