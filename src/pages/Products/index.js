import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Products() {

    const [product, setProduct] = useState([]);

    const navigation = useNavigation();


    function navigateBack() {
        navigation.goBack();
    }

    useEffect(() => {
    async function showItems() {
        try {
            const res = await AsyncStorage.getItem('item')
            .then(res => { return Promise.resolve(JSON.parse(res)) });
            setProduct(res);

            console.log(product);

        } catch (err) {

        }
    }
    showItems()
}, [])

    const renderItem = ({ item }) => (
        <View style={styles.product}>
            <Text style={styles.productProperty}>Nome: </Text>
            <Text style={styles.productValue}>{item.name}</Text>

            <Text style={styles.productProperty}>Codigo de barras: </Text>
            <Text style={styles.productValue}> {item.barCode} </Text>

            <Text style={styles.productProperty}>Validade: </Text>
            <Text style={styles.productValue}>{item.validity}</Text>
        </View>
    )

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
                data={product}
                keyExtractor={(item => item.id)}
                renderItem={renderItem}
            />
        </View>
    )
}