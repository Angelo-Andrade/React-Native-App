const express = require('express');
const cors = require('cors');
const { criarGasto, listarHistorico, statusBanco, obterGastoTotal, obterTotalPorCategoria } = require('../database/mongo');

const app = express();
app.use(express.json());
app.use(cors());

//status banco
app.get('/health', asyncHandler(async (req, res) => {
    console.log('Consumindo get /health');
    const conn = await statusBanco();
    res.status(200).json({ databaseStatus: conn });
}, 'Erro ao comunicar com banco de dados'));

//requisicoes gerais
app.get('/historico', asyncHandler(async (req, res) => {
    console.log('Consumindo get /historico');
    const historico = await listarHistorico();
    res.status(200).json(historico);
}, 'Erro ao listar gastos'));

//requisicoes gastos
app.get('/gastos/total', asyncHandler(async (req, res) => {
    console.log('Consumindo get /gastos/total');
    const gastos = await obterTotalPorCategoria('gasto');
    res.status(200).json(gastos);
}, 'Erro ao obter gasto total'));

app.post('/gastos/criar', asyncHandler(async (req, res) => {
    console.log('Consumindo post /gastos/criar');
    const gasto = await criarGasto(req.body);
    res.status(201).json(gasto);
}, 'Erro ao criar gasto'));

//requisicoes receita
app.get('/receitas/total', asyncHandler(async (req, res) => {
    console.log('Consumindo get /receitas/total');
    const gastos = await obterTotalPorCategoria('receita');
    res.status(200).json(gastos);
}, 'Erro ao obter gasto total'));



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

function asyncHandler(fn, errorMessage = 'Erro no servidor') {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            console.error(errorMessage + ':', error);
            res.status(500).json({ error: errorMessage });
        }
    };
}
