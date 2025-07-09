import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const AlertCarregando = ({ texto = 'Carregando...' }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#009688" />
            <Text style={styles.texto}>{texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    texto: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
    },
});

module.exports = {
    AlertCarregando,
}