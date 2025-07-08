import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Resumo from '../views/Resumo';
import Erro from '../views/Erro';
import Novogasto from '../views/Novogasto';
import Historico from '../views/Historico';
import Perfil from '../views/Perfil';
import Cabecalho from '../components/Cabecalho'; 

const Stack = createNativeStackNavigator();

export default function RootStack ({ statusBanco }) {
    return (
        <Stack.Navigator initialRouteName={ statusBanco ? "Resumo" : "Erro" }>
            <Stack.Screen name="Historico" component={Historico} options={{ header: () => <Cabecalho titulo="Histórico" /> }} />
            <Stack.Screen name="Novo gasto" component={Novogasto} options={{ header: () => <Cabecalho titulo="Novo Gasto" /> }} />
            <Stack.Screen name="Perfil" component={Perfil} options={{ header: () => <Cabecalho titulo="Perfil" /> }} />
            <Stack.Screen name="Resumo" component={Resumo} options={{ header: () => <Cabecalho titulo="Resumo" /> }} /> 
            <Stack.Screen name="Erro" component={Erro} options={{ header: () => <Cabecalho titulo="Ocorreu um erro" /> }}/>
        </Stack.Navigator>
    );
}