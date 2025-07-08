// listagem de gastos
// cores diferentes para ganhos e perdar, verde e vermelho
// exibir total de despesas, receitas e saldo final
// cores dos saldo alteram conforme o valor, verde e vermelho
// graficos simples, barra de progresso ou cardsimport React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { requisicaoGet } from '../utils/front';
import CardGasto from '../components/CardGasto';

export default () => {
    const [ historico, setHistorico ] = useState([]);
    
    useEffect(() => {
        async function carregarDados() {
            const data = await requisicaoGet('http://localhost:3000/historico', 'Erro ao carregar historico');            
            if(data) setHistorico(data);
        }
        carregarDados();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                data={historico}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <CardGasto item={item} />}
                ListEmptyComponent={<Text style={styles.vazio}>Histórico vazio.</Text>}
            />
        </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 16,
        marginBottom: 40,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16
    },
    vazio: {
        textAlign: 'center',
        color: '#888',
        marginTop: 20
    },
});