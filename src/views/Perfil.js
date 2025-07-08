// formulario para cadastro, nome e email
// botao salvar perfil
// avatar com imagem aleatória (ou galeria)
// campos: descricao do gasto, valor e categoria
// botao adicionar gasto manda dados para historico
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Avatar from '../components/Avatar';
import { requisicaoPost } from '../utils/front';

export default () => {
    const [ descricao, setDescricao ] = useState('');
    const [ valor, setValor ] = useState('');
    const [ categoria, setCategoria ] = useState('gasto');

    const HandleInformation = () => {
        const params = { descricao, valor, categoria };
        const data = requisicaoPost('http://localhost:3000/gastos/criar', params, 'Não foi possível cadastrar o novo gasto...');
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Avatar />
            <CustomInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
            <CustomInput placeholder="Valor" value={valor} onChangeText={ (text) => setValor(text.replace(/[^0-9]/g, '')) } />
            <CustomInput label="Categoria" type="select" value={categoria} onChangeText={setCategoria} options={[{ label: 'Gasto', value: 'gasto' }, { label: 'Receita', value: 'receita' }, ]}/>
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
