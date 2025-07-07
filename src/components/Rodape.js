import React, { useState } from 'react';
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';


export default function Rodape () {
    const navigation = useNavigation();
//    const [ pagina, setPagina ] = useState(''); 
    
    function navigateButton (pagina) {
        navigation.navigate(pagina);
    }

    return (
        <View>
            <CustomButton onPress={() => navigateButton("Novo gasto")} title="teste" />
        </View>
    );
}