import { View, Text, StyleSheet } from 'react-native';

const CardGasto = ({ item }) => {
  const isReceita = item.categoria === 'receita';

  return (
    <View style={styles.card}>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={[styles.valor, isReceita ? styles.receita : styles.despesa]}>
        R$ {item.valor}
      </Text>
      <Text style={styles.categoria}>Categoria: {item.categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  descricao: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 4,
  },
  valor: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  receita: {
    color: '#2e7d32',
  },
  despesa: {
    color: '#c62828',
  },
  categoria: {
    fontSize: 24,
    color: '#666',
    marginTop: 4,
  },
});

export default CardGasto;