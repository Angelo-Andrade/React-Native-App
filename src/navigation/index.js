import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../views/Inicio';
import Erro from '../views/Erro';
import Novogasto from '../views/Novogasto';

const Stack = createNativeStackNavigator();

export default function RootStack ({ statusBanco }) {
    return (
        <Stack.Navigator initialRouteName={ statusBanco ? "Inicio" : "Erro" }>
            <Stack.Screen name="Inicio" component={Inicio} />
            {/* <Stack.Screen name="Histórico" component={Historico} /> */}
            <Stack.Screen name="Novo gasto" component={Novogasto} />
            {/* <Stack.Screen name="Perfil" component={Historico} />
            <Stack.Screen name="Resumo" component={Historico} /> */}
            <Stack.Screen name="Erro" component={Erro} />
        </Stack.Navigator>
    );
}