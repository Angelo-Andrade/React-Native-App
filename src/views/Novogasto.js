// campos: descricao do gasto, valor e categoria
// botao adicionar gasto manda dados para historico
import React, { useState } from "react";
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

export default () => {
    const [ descricao, setDescricao ] = useState('');
    const [ valor, setValor ] = useState('');
    const [ categoria, setCategoria ] = useState('');

    const HandleInformation = () => {
        console.log('hello there');
        //enviar dados para o banco
    }

    return (
        <div>
            <form onSubmit={HandleInformation}>
                <CustomInput label='Descrição' placeholder="Descrição do gasto..."></CustomInput>
                <CustomInput label='Valor' placeholder="Quantia gasta..."></CustomInput>
                <CustomInput label='Categoria' placeholder="Categoria do gasto..."></CustomInput>
                <CustomButton text='Enviar'></CustomButton>
            </form>
        </div>
    );
}