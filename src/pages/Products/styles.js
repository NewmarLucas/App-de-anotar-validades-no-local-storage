import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        right: 15
    },

    productList: {
        marginTop: 32, 
    },

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    productProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },

    productValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
});