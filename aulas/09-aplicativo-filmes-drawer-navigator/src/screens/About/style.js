import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#141A29'
    },
    header: {
        
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    description: {
        fontSize: 16,
        marginStart: 10,
        marginEnd: 10,
        marginTop: 10,
        textAlign: 'justify',
        color: '#fff'
    },
})