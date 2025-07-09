import { createContext, useState, useEffect } from 'react';
import { requisicaoGet } from '../utils/front';

export const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {
    const [perfil, setPerfil] = useState(null);

    async function carregarPerfil() {
        const dados = await requisicaoGet('http://localhost:3000/perfil/buscar', 'Erro ao carregar perfil');
        if (dados) setPerfil(dados);
    }

    useEffect(() => {
        carregarPerfil();
    }, []);

    return (
        <PerfilContext.Provider value={{ perfil, setPerfil }}>
            {children}
        </PerfilContext.Provider>
    );
};
