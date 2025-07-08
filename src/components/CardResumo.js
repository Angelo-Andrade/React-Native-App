import { View, Text, StyleSheet } from 'react-native';

const CardResumo = ({ tipo, descricao, valor }) => {
    const isGasto = tipo === 'gasto';
    const isReceita = tipo === 'receita';
    const isSaldo = tipo === 'saldo';

    const saldoPositivo = isSaldo && valor >= 0;

    let cardStyle = styles.card;
    let textStyle = styles.valor;

    if (isReceita) textStyle = [ styles.valor, styles.receita ];
    else if (isGasto) textStyle = [ styles.valor, styles.despesa ];
    else if (isSaldo) { 
        textStyle = [ styles.valor, styles.saldo, saldoPositivo ? styles.positivo : styles.negativo ];
        cardStyle = [ styles.card, styles.cardSaldo ]
    }

    return (
        <View style={ cardStyle }>
            <Text style={styles.label}>{ descricao }</Text>
            <Text style={textStyle}>R$ { valor }</Text>
        </View>
    );
};


const styles = StyleSheet.create({
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
        fontSize: 36,
        color: '#555',
        marginBottom: 4,
    },
    despesa: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#e53935', // vermelho
    },
    receita: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#43a047', // verde
    },
    saldo: {
        fontSize: 42,
        fontWeight: 'bold',
    },
    positivo: {
        color: '#2e7d32', // verde escuro
    },
    negativo: {
        color: '#c62828', // vermelho escuro
    }
});

export default CardResumo;