import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF',
    },
    header:{
      marginBottom: 8
    },
    image:{
      width: '100%'
    },
    textContainer:{
      flexDirection: 'row',
      marginHorizontal: '5%',
      marginTop: '5%',
      justifyContent: "center",
      alignItems: "center"
    },
    text:{
      fontFamily: 'Anton_400Regular',
      fontSize: 25,
      marginHorizontal: '1%',
      marginBottom: '5%',
      marginTop: '2%'
    },
    textDetail:{
      fontFamily: 'Anton_400Regular',
      fontSize: 20,
      marginHorizontal: '1%',
      marginBottom: '5%',
      marginTop: '2%'
    },
    line:{
      borderBottomColor: '#D8d8d8',
      borderBottomWidth: 2,
    }
})