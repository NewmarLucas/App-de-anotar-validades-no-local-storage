import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 32
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