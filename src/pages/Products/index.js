import React from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
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
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={30} color="#E02041" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Produtos</Text>
            </View>

            <FlatList
                style={styles.productList}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={item => String(item)}
                renderItem={() => (
                    <View style={styles.product}>
                        <Text>Produto: Coca cola 2l</Text>
                        <Text>Codigo de barras: 7894900027013</Text>
                    </View>
                )}
            />
        </View>
    )
}