import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Products() {

    const [id, setId] = useState([]);

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    async function showItems() {
        try {
            const savedItems = await AsyncStorage.getItem(id)
            return savedItems != null ? JSON.parse(savedItems) : null;
            console.log(savedItems);
        } catch(err) {

        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={30} color="#E02041" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Produtos</Text>
            </View>

            <FlatList
                style={styles.productList}
                data={[1, 2, 3, 4]}
                keyExtractor={item => String(item)}
                renderItem={() => (
                    <View style={styles.product}> 
                        <Text>Nome: </Text>
                        <Text>Coca-cola 2l</Text>

                        <Text>Codigo de barras: </Text>
                        <Text> 7894900027013 </Text>

                        <Text>Validade: </Text>
                        <Text>16/12/2020</Text>
                    </View>
                )}
            />
        </View>
    )
}