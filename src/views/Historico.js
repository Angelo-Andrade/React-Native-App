// listagem de gastos
// cores diferentes para ganhos e perdar, verde e vermelho
// exibir total de despesas, receitas e saldo final
// cores dos saldo alteram conforme o valor, verde e vermelho
// graficos simples, barra de progresso ou cardsimport React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { requisicaoGet } from '../utils/front';
import CardGasto from '../components/CardGasto';
import {AlertCarregando} from '../components/AlertCarregando';

export default () => {
    const [ historico, setHistorico ] = useState([]);
    const [ carregando, setCarregando ] = useState(true);
    const [ error , setError ] = useState(null);

    async function carregarDados() {
        setCarregando(true);
        const data = await requisicaoGet('http://localhost:3000/historico', 'Erro ao carregar historico');            
        setCarregando(false);
        if (!data) return setError(true); 
        setHistorico(data);
    }

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <View style={styles.container}>
            { carregando && <AlertCarregando /> }
            { !error ? (
                <FlatList 
                    data={historico}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <CardGasto item={item} />}
                    ListEmptyComponent={<Text style={styles.vazio}>Histórico vazio.</Text>}
                    />
                ) : (
                    <Text style={styles.erro}>Houve um erro ao carregar o histórico</Text>
                ) 
            }
        </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 20,
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
    erro: {
        textAlign: 'center',
        color: '#FF0000',
        margin: 10,
        fontSize: 20,
    },
});