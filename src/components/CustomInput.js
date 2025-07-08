import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomInput = ({ label, placeholder, secureTextEntry, onChangeText, value, type = 'text', options = [], ...props }) => {
    return (
        <View style={styles.container}>
        {label && <Text style={styles.label}>{label}:</Text>}

        {type === 'select' ? (
            <Picker selectedValue={value} onValueChange={onChangeText} style={styles.input} >
            {options.map((option) => (
                <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
            </Picker>
        ) : (
            <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} onChangeText={onChangeText} value={value} {...props}/>
        )}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    fontSize: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 8,
  },
});

export default CustomInput;