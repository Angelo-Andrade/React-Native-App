// exibir total de despesas, receitas e saldo final
// cores dos saldo alteram conforme o valor, verde e vermelho
// graficos simples, barra de progresso ou cardsimport React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { requisicaoGet } from '../utils/front';
import CardResumo from '../components/CardResumo';
import {AlertCarregando} from '../components/AlertCarregando';

export default () => {
    const [ despesas, setDespesas ] = useState(0.00);
    const [ receitas, setReceitas ] = useState(0.00);
    const [ saldo, setSaldo ] = useState(0.00);
    const [ carregando, setCarregando ] = useState(true);
    const [ error, setError ] = useState(false);


    async function carregarDados() {
        setCarregando(true);
        const dataDespesas = await requisicaoGet('http://localhost:3000/gastos/total', 'Erro ao carregar despesas');
        const dataReceitas = await requisicaoGet('http://localhost:3000/receitas/total', 'Erro ao carregar receitas');
        const dataSaldo = await requisicaoGet('http://localhost:3000/saldo/total', 'Erro ao carregar receitas');
        setCarregando(false);
        if (!dataDespesas || !dataReceitas || !dataSaldo) return setError(true);

        setDespesas(dataDespesas);
        setReceitas(dataReceitas);
        setSaldo(dataSaldo);
    }

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <View style={styles.container}>
            { carregando && <AlertCarregando /> }
            { !error ? (
                <View style={styles.container}>
                    <CardResumo tipo="gasto" descricao="Despesas" valor={despesas} />
                    <CardResumo tipo="receita" descricao="Receitas" valor={receitas} />
                    <CardResumo tipo="saldo" descricao="Saldo" valor={saldo} />
                </View> 
            ) : (
                <View style={styles.container}>
                    <Text style={styles.erro}>Ocorreu um erro ao consultar as informacões</Text>
                </View>
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
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
    erro: {
        textAlign: 'center',
        color: '#FF0000',
        margin: 10,
        fontSize: 20,
    },
});
