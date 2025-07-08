// campos: descricao do gasto, valor e categoria
// botao adicionar gasto manda dados para historico
import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { requisicaoPost } from '../utils/front';

export default () => {
    const [ descricao, setDescricao ] = useState('');
    const [ valor, setValor ] = useState('');
    const [ categoria, setCategoria ] = useState('');

    const HandleInformation = () => {
        const params = { descricao, valor, categoria };
        const data = requisicaoPost('http://localhost:3000/gastos', params, 'Não foi possível cadastrar o novo gasto...');
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <CustomInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
            <CustomInput placeholder="Valor" value={valor} onChangeText={setValor} />
            <CustomInput placeholder="Categoria" value={categoria} onChangeText={setCategoria} />
            <CustomButton title="Enviar" onPress={HandleInformation} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
