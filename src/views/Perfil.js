// formulario para cadastro, nome e email
// botao salvar perfil
// avatar com imagem aleatória (ou galeria)
// campos: descricao do gasto, valor e categoria
// botao adicionar gasto manda dados para historico
import { useState, useContext } from "react";
import { View, StyleSheet, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Avatar from '../components/Avatar';
import { requisicaoPost, selecionarImagem } from '../utils/front';
import { PerfilContext } from '../contexts/PerfilContext';
import {AlertCarregando} from '../components/AlertCarregando';

export default () => {
    const { perfil, setPerfil } = useContext(PerfilContext);
    const [ nome, setNome ] = useState(perfil ? perfil.nome : '');
    const [ email, setEmail ] = useState(perfil ? perfil.email : '');
    const [ imagemUri, setImagem ] = useState(perfil ? perfil.imagemUri : '');
    const [ error , setError ] = useState(null);
    const [ carregando, setCarregando ] = useState(false);
    const [ sucess, setSucess ] = useState(false);

    const imagemSelection = async () => {
        const uri = await selecionarImagem();
        if (uri) setImagem(uri);
    }

    const handleInformation = async () => {
        setCarregando(true);
        setError(null);
        setSucess(false);
        const params = { nome, email, imagemUri };
        const erro = 'Não foi possível cadastrar o novo perfil...';        
        const data = await requisicaoPost('http://localhost:3000/perfil/criar', params, erro);
        setCarregando(false);
        if (data) return setPerfil(data);
        setError(erro);
    }

    return (
        <View style={styles.container}>
            <Avatar imagemUri={imagemUri} buttonAction={imagemSelection} />
            <CustomInput placeholder="Nome" value={nome} onChangeText={setNome} />
            <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
            { carregando && <AlertCarregando/>}
            { error && <Text style={styles.erro}>{ error }</Text>}
            { sucess && <Text style={styles.sucess}>{ 'Perfil atualizado!' }</Text>}
            <CustomButton title="Enviar" onPress={handleInformation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    erro: {
        color: '#FF0000',
        margin: 10,
        fontSize: 20,
    }
});
