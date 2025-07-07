import React from 'react';
import { View, StyleSheet } from 'react-native';
import Rodape from './Rodape';

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            {children} {/* Aqui é onde a Navigation será renderizada */}
        </View>
        <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    content: { 
        flex: 1 
    },
});
