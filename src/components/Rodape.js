import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';


export default function Rodape () {
    const navigation = useNavigation();
    
    function navigateButton (pagina) {
        navigation.navigate(pagina);
    }

    return (
        <View style={styles.footer}>
          <CustomButton onPress={() => navigateButton("Resumo")} title="Resumo" />
          <CustomButton onPress={() => navigateButton("Novo gasto")} title="Novo gasto" />
          <CustomButton onPress={() => navigateButton("Historico")} title="Histórico" />
          <CustomButton onPress={() => navigateButton("Perfil")} title="Perfil" />
        </View>
    );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginTop: 15,
  }
});
