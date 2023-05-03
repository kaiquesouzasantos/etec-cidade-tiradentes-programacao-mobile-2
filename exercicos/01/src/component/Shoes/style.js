import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom:'5%',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0.1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 16.00,
        elevation: 1,
    },
    shoesImg:{
        width: 175,
        height: 175
    },
    shoesText:{
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        color: '#000'
    },
    detailText:{
        fontSize: 12
    }
})