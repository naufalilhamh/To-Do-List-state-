import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const InlineInputAndButton = (props) => {

    const { text, handleChangeText, handleAddButton, name, placeholder, mode } = props;
    
    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                placeholder={placeholder}
                style={styles.input}
                onChangeText={(text) => handleChangeText(text)}
            />
            <Button
                mode={mode}
                style={styles.buttonContainer}
                onPress={() => handleAddButton(text)}
                disabled={(text == "" ? true : false)}
            >Tambah</Button>
        </View>
    );
};

export default InlineInputAndButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingVertical: 16
    },
    input: {
        flex: 6,
        color: 'purple',
        fontSize: 18,
        marginRight: 16
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})