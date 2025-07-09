import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation';
import CustomLayout from './src/components/CustomLayout';
import { PerfilProvider } from './src/contexts/PerfilContext';
import { requisicaoGet } from './src/utils/front';

export default function App() {
    const status = requisicaoGet('http://localhost:3000/health', 'Problema ao realizar requisicão de status...'); 
    
    return (
        <PerfilProvider>
            <NavigationContainer>
                <CustomLayout>
                    <RootStack statusBanco={status} />
                </CustomLayout>
            </NavigationContainer>
        </PerfilProvider>
    );
}
