import React, { useState } from 'react';
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from './CustomButton';


export default function Rodape () {
//    const [ pagina, setPagina ] = useState(''); 
    
    const navigation = useNavigation();
    
    function navigateButton (pagina) {
        navigation.navigate(pagina);
    }

    return (
        <View>
            <CustomButton onPress={() => navigateButton("Novo gasto")} title="teste" />
        </View>
    );
}