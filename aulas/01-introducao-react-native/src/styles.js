import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D3D3D3',
    },

    gradientBackground:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },

    image:{
        width:50,
        height:50,
        marginBottom:50
    },

    box:{
        marginTop:70,
        alignItems:'center',
        borderRadius:8,
        backgroundColor:'white',
        width:'85%',
        height:400,
        justifyContent:'center',
    },

    input:{
        borderRadius:8,
        width:'80%',
        marginLeft:15,
        padding:15,
        borderWidth:1
    },

    viewIcon:{
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10
    },

    button:{
        width:'83%',
        backgroundColor:'#D3D3D3',
        borderRadius:5,
        height:40, 
        padding:10,
        marginTop:60,
        alignItems:'center'
    }, 

    textButton:{
        fontWeight:'normal',
        color:'black'
    }
})