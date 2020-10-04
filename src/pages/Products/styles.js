import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center',
        justifyContent: 'center'
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

    buttonBack: {
        position: 'absolute',
        top: 15,
        left: 15
    },
});