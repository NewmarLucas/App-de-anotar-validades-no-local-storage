import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';


export default function Home() {


    const navigation = useNavigation();

    function navigationToCreate() {
        navigation.navigate('Create')
    }

    function navigationToProducts() {
        navigation.navigate('Products')
    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Validades</Text>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={navigationToCreate}>
                    <Text style={styles.buttonText}>
                        Cadastrar Produto
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={navigationToProducts}>
                    <Text style={styles.buttonText}>
                        Produtos cadastrados
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};