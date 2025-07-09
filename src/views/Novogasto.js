// campos: descricao do gasto, valor e categoria
// botao adicionar gasto manda dados para historico
import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { requisicaoPost } from '../utils/front';
import { AlertCarregando } from '../components/AlertCarregando';


export default () => {
    const [ descricao, setDescricao ] = useState('');
    const [ valor, setValor ] = useState('');
    const [ categoria, setCategoria ] = useState('gasto'); 
    const [ error , setError ] = useState(null);
    const [ carregando, setCarregando ] = useState(false);
    const [ sucess, setSucess ] = useState(false);

    const handleInformation = async () => {
        setCarregando(true);
        setError(null);
        setSucess(false);
        const params = { descricao, valor, categoria };
        const erro = 'Não foi possível cadastrar o novo gasto, tente novamente mais tarde.';
        const data = await requisicaoPost('http://localhost:3000/gastos/criar', params, erro);
        setCarregando(false);
        if (data) return setSucess(true);
        setError(erro);
    }

    function validacaoValor (text) {
        let valor = text.replace(/[^0-9.]/g, '');
        const partes = valor.split('.');
        const numero = parseFloat(valor);
        
        if (partes.length > 2) valor = partes[0] + '.' + partes[1];

        if (valor.includes('.')) {
            const [inteiro, decimal] = valor.split('.');
            valor = inteiro + '.' + decimal.slice(0, 2);
        }

        if (!isNaN(numero) && numero >= 0) return setValor(valor);
        setValor('');
    }

    return (
        <View style={styles.container}>
            <CustomInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
            <CustomInput placeholder="Valor" value={valor} onChangeText={ (text) => validacaoValor(text) } />
            <CustomInput label="Categoria" type="select" value={categoria} onChangeText={setCategoria} options={[{ label: 'Gasto', value: 'gasto' }, { label: 'Receita', value: 'receita' }, ]}/>
            { carregando && <AlertCarregando/>}
            { error && <Text style={styles.erro}>{ error }</Text>}
            { sucess && <Text style={styles.sucess}>{ 'Novo gasto cadastrado!' }</Text>}
            <CustomButton title="Enviar" onPress={handleInformation} />
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
  erro: {
    color: '#FF0000',
    margin: 10,
    fontSize: 20,
  },
  sucess: { 
    color: '#2e7d32',
    margin: 10,
    fontSize: 20,
  }
});
