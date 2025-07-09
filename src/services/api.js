const express = require('express');
const cors = require('cors');
const { criarGasto, listarHistorico, statusBanco, obterTotalPorCategoria, obterPerfil, salvarPerfil, obterSaldo } = require('../database/mongo');

const app = express();
app.use(express.json());
app.use(cors());

//status banco
app.get('/health', asyncHandler(async (req, res) => {
    console.log('Consumindo get /health');
    return await statusBanco();
}, 200, 'Erro ao comunicar com banco de dados'));

//requisicoes gerais
app.get('/historico', asyncHandler(async (req, res) => {
    console.log('Consumindo get /historico');
    return await listarHistorico();
}, 200, 'Erro ao listar gastos'));

app.get('/saldo/total', asyncHandler(async (req, res) => {
    console.log('Consumindo get /saldo/total');
    return await obterSaldo();
}, 200, 'Erro ao listar saldo'));

//requisicoes gastos
app.get('/gastos/total', asyncHandler(async (req, res) => {
    console.log('Consumindo get /gastos/total');
    return await obterTotalPorCategoria('gasto');
}, 200, 'Erro ao obter gasto total'));

app.post('/gastos/criar', asyncHandler(async (req, res) => {
    console.log('Consumindo post /gastos/criar');
    return await criarGasto(req.body);
}, 201, 'Erro ao criar gasto'));

//requisicoes receita
app.get('/receitas/total', asyncHandler(async (req, res) => {
    console.log('Consumindo get /receitas/total');
    return await obterTotalPorCategoria('receita');
}, 200, 'Erro ao obter gasto total'));

//requisicoes perfil
app.get('/perfil/buscar', asyncHandler(async(req, res) => {
    console.log('Consumindo get /perfil');
    return await obterPerfil();
}, 200, 'Erro ao obter perfil'));

app.post('/perfil/criar', asyncHandler(async(req, res) => {
    console.log('Consumindo post /perfil');
    return await salvarPerfil(req.body);
}, 201,'Erro ao obter perfil'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

function asyncHandler(fn, code = 200, errorMessage = 'Erro no servidor') {
    return async (req, res, next) => {
        try {
            const data = await fn(req, res, next);
            res.status(code).json(data);
        } catch (error) {
            console.error(errorMessage + ':', error);
            res.status(500).json({ error: errorMessage });
        }
    };
}
