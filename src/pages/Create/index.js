import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
// import getRealm from '../../services/realm';

export default function Create() {

    const [name, setName] = useState('');
    const [barCode, setBarCode] = useState('');
    const [validity, setValidity] = useState('');

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }


    async function createProduct() {


        try {
            const id = Math.floor(Math.random() * 16777215).toString(16);

            const value = {
                name,
                barCode,
                validity,
                id
            }

            let savedItems = [];

            const response = await AsyncStorage.getItem('item');

            if (response) savedItems = JSON.parse(response);
            savedItems.push(value);
            console.log(savedItems);


            await AsyncStorage.setItem('item', JSON.stringify(savedItems));

            // Alert.alert(
            //     "Produto cadatrado com sucesso",
            //     [
            //         { text: "Continuar" }
            //     ],
            // )
        } catch (err) {
            Alert.alert(
                "Erro no cadastro",
                [
                    { text: "Tente novamente!" }
                ],
            )

        }
    }

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={30} color="#E02041" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Cadastrar Produto</Text>
            </View>



            <View style={styles.form}>
                <TextInput
                    style={styles.formTextInput}
                    placeholder="Insira o nome do produto"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={styles.formTextInput}
                    placeholder="Insira o codigo de barras"
                    keyboardType="numeric"
                    onChangeText={text => setBarCode(text)}
                />
                <TextInput
                    style={styles.formTextInput}
                    placeholder="Insira a data de validade"
                    onChangeText={text => setValidity(text)}
                />
                <TouchableOpacity onPress={createProduct} style={styles.button}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}