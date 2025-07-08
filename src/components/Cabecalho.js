import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = ({ titulo }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{titulo}</Text>
  </View>
);

export default Cabecalho;

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#009688',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
