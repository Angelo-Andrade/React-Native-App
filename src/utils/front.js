import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

async function requisicaoGet (url, errorMessage) {
    try {
        const res = await axios.get(url);
        const data = res.data;
        return data;
    }
    catch (err) { console.log(errorMessage, err); }

    return null;
}

async function requisicaoPost(url, params, errorMessage) {
    const { descricao, valor, categoria } = params;
    const { nome, email, imagemUri } = params;
    console.log(descricao, valor, categoria, nome, email, imagemUri);
    try {
        await axios.post(url,
            descricao ? { descricao, valor, categoria } : { nome, email, imagemUri }, 
            {
                headers: {
                'Content-Type': 'application/json', 
                },
            }
        );
        return true;
    } catch (err) {
        console.log(errorMessage, err);
        return false;
    }
}

async function selecionarImagem () {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Permissão negada para acessar a galeria');
        return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
    });

    if (!resultado.canceled) {
        // console.log(resultado.assets[0].uri);
        return resultado.assets[0].uri;
    }
    return null;
};

module.exports = {
    requisicaoGet,
    requisicaoPost,
    selecionarImagem,
};