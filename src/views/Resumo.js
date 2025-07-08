// exibir total de despesas, receitas e saldo final
// cores dos saldo alteram conforme o valor, verde e vermelho
// graficos simples, barra de progresso ou cardsimport React from 'react';
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { requisicaoGet } from '../utils/front';

export default () => {
    const [ despesas, setDespesas ] = useState(0.00);
    const [ receitas, setReceitas ] = useState(0.00);
    const [ saldo, setSaldo ] = useState(0.00);

    useEffect(() => {
        async function carregarDados() {
            const dataDespesas = await requisicaoGet('http://localhost:3000/gastos/total', 'Erro ao carregar despesas');
            // const dataReceitas = await requisicaoGet('http://localhost:3000/receitas/total', 'Erro ao carregar receitas');
            
            if (dataDespesas) setDespesas(dataDespesas);
            // if (dataReceitas) setReceitas(dataReceitas);

            // if (dataDespesas !== null && dataReceitas !== null) {
            //     setSaldo(dataReceitas - dataDespesas);
            // }
        }

        carregarDados();
    }, []);

    return (
        <View>
            <Text>Despesas: {despesas}</Text>
            <Text>Receitas: {receitas}</Text>
            <Text>Saldo: {saldo}</Text>
        </View>
    );
}