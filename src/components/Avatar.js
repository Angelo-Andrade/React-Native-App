import { useState } from 'react';
import { View, Text, Image, StyleSheet } from "react-native-web";
import CustomButton from "./CustomButton";

const Avatar = ({ imagemUri, buttonAction }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Imagem Selecionada:</Text>
            { imagemUri ? ( <Image source={{ uri: imagemUri }} style={styles.imagem} /> ) :
            ( <Text style={styles.text}>Nenhuma imagem selecionada...</Text> )}
            <CustomButton title={ !imagemUri ? "Selecionar imagem" : "Selecionar outra imagem"} onPress={buttonAction} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20 
    },
    text: { 
        fontSize: 26, 
        marginTop: 20, 
        marginBottom:10,
    },
    imagem: { 
        width: 250, 
        margin: 10,
        height: 300, 
        borderRadius: 10 
    },
});

export default Avatar;