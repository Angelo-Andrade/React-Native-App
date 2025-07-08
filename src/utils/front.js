const axios = require('axios');

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
    console.log(descricao, valor, categoria);
    try {
        await axios.post(url,
        { descricao, valor, categoria }, 
        {
            headers: {
            'Content-Type': 'application/json', 
            },
        }
        );
        return true;
    } catch (err) {
        console.log(errorMessage, err);
    }
    return null;
}

module.exports = {
    requisicaoGet,
    requisicaoPost,
};