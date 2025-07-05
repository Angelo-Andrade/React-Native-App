import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../views/Inicio';
// import Historico from '../views/Historico';
import Novogasto from '../views/Novogasto';
import Rodape from '../components/Rodape'

const Stack = createNativeStackNavigator();

export default function RootStack () {
    return (
        <Stack.Navigator initialRouteName="Inicio" Rodape={Rodape}>
            <Stack.Screen name="Inicio" component={Inicio} />
            {/* <Stack.Screen name="Histórico" component={Historico} /> */}
            <Stack.Screen name="Novo gasto" component={Novogasto} />
            {/* <Stack.Screen name="Perfil" component={Historico} />
            <Stack.Screen name="Resumo" component={Historico} /> */}
        </Stack.Navigator>
    );
}