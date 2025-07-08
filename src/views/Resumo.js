// exibir total de despesas, receitas e saldo final
// cores dos saldo alteram conforme o valor, verde e vermelho
// graficos simples, barra de progresso ou cardsimport React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { requisicaoGet } from '../utils/front';
import CardResumo from '../components/CardResumo';

export default () => {
    const [ despesas, setDespesas ] = useState(0.00);
    const [ receitas, setReceitas ] = useState(0.00);
    const [ saldo, setSaldo ] = useState(0.00);

    useEffect(() => {
        async function carregarDados() {
            const dataDespesas = await requisicaoGet('http://localhost:3000/gastos/total', 'Erro ao carregar despesas');
            const dataReceitas = await requisicaoGet('http://localhost:3000/receitas/total', 'Erro ao carregar receitas');
            if (dataDespesas) setDespesas(dataDespesas);
            if (dataReceitas) setReceitas(dataReceitas);

            if (dataDespesas !== null && dataReceitas !== null) {
                setSaldo(dataReceitas - dataDespesas);
            }
        }

        carregarDados();
    }, []);

    return (
        <View style={styles.container}>
            <CardResumo tipo="gasto" descricao="Despesas" valor={despesas} />
            <CardResumo tipo="receita" descricao="Receitas" valor={receitas} />
            <CardResumo tipo="saldo" descricao="Saldo" valor={saldo} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    marginHorizontal: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardSaldo: {
    backgroundColor: '#e0f7fa',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  despesa: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e53935', // vermelho
  },
  receita: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#43a047', // verde
  },
  saldo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  positivo: {
    color: '#2e7d32', // verde escuro
  },
  negativo: {
    color: '#c62828', // vermelho escuro
  },
});
