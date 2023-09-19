import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerDetail:{
        flex: 1,
        backgroundColor: '#141A29',
        alignItems: 'center',
    },
    imageDetail: {
        width: '100%',
        height: '70%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    textDetail:{
        color:'#fff',
        fontSize:30,
        paddingTop:8,
    },
    titleSinopseDetail:{
        color:'#fff',
        fontSize:18,
        paddingTop:8,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15
    },
    starRating:{
        width: '85%',
        justifyContent: 'flex-start',
        marginLeft: 5
    },
    textStar:{
        color:'#fff',
        fontSize:15,
        width: '20%',
    },
    linhaUnica:{
        width: '100%',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15
    },
    sinopseDetail:{
        color:'#fff',
        fontSize:12,
        paddingTop:8,
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginRight: 10
    },
    notaDetail:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },
})