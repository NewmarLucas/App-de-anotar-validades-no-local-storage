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
        alignItems: 'center',
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        right: 15
    },

    form: {
        alignItems: 'center',
        marginTop: 100
    },

    formTextInput: {
        color: '#333',
        width: '100%',
        height: 60,
        marginTop: 13,
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 18
    },

    button: {
        marginBottom: 30,
        marginTop: 16,
        height: 60,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#E02041',
        
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60
    },
});