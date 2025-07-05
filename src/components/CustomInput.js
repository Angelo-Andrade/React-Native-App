import { View, TextInput, Text, StyleSheet } from 'react-native';

export default CustomInput = ({label, placeholder, secureTextEntry, onChangeText, value, ...props }) => {
    return (
        <View style={styles.container}>
            { label && <Text style={styles.label}>{label}</Text> }
            <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} onChangeText={onChangeText} value={value} {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    }
}); 