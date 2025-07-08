import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Resumo from '../views/Resumo';
import Erro from '../views/Erro';
import Novogasto from '../views/Novogasto';

const Stack = createNativeStackNavigator();

export default function RootStack ({ statusBanco }) {
    return (
        <Stack.Navigator initialRouteName={ statusBanco ? "Resumo" : "Erro" }>
            {/* <Stack.Screen name="Histórico" component={Historico} /> */}
            <Stack.Screen name="Novo gasto" component={Novogasto} />
            {/* <Stack.Screen name="Perfil" component={Historico} />*/}
            <Stack.Screen name="Resumo" component={Resumo} /> 
            <Stack.Screen name="Erro" component={Erro} />
        </Stack.Navigator>
    );
}