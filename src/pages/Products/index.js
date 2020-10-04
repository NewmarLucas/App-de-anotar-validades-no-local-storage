import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Products() {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Produdos cadastrados</Text>
            </View>

            <View style={styles.buttonBack}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={30} color="#E02041" />
                </TouchableOpacity>
            </View>
        </View>
    )
}