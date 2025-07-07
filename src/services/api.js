const express = require('express');
const cors = require('cors');
const { criarGasto, listarGastos, statusBanco } = require('../database/mongo');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', async (req, res) => {
  try {
    const conn = await statusBanco();
    res.status(200).json({ databaseStatus: conn });
  } catch (error) {
    console.error('Erro ao comunicar com banco de dados: ', error);
    res.status(500).json({ error: 'Erro ao comunicar com banco de dados' });
  }
});

app.get('/gastos', async (req, res) => {
  try {
    const gastos = await listarGastos();
    res.status(200).json(gastos);
  } catch (error) {
    console.error('Erro ao listar gastos:', error);
    res.status(500).json({ error: 'Erro ao listar gastos' });
  }
});

app.post('/gastos', async (req, res) => {
  try {
    console.log("Post recebido", req.body);
    const gasto = await criarGasto(req.body);
    res.status(201).json({ message: 'Gasto salvo com sucesso!', gasto });
  } catch (error) {
    console.error('Erro ao salvar gasto:', error);
    res.status(500).json({ error: 'Erro ao salvar gasto' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
