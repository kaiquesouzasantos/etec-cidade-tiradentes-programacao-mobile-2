import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Listar extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#fff",height:"140%"}}>
                <Image source ={require('../images/conta.png')}
                    style={{width:"100%",height:"30%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     color:'#D31037',
                     marginTop: 20,
                     alignSelf:"center",
                 }}
                >IMPOSTO DE RENDA</Text>

                <Text
                style={{
                    fontSize:25,
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:35,
                    opacity:0.4
                }}
                >
                    Listar Usuário.
                </Text>           

                <Text 
                
                onPress={()=>navigate('Login')}
                
                style={{
                    alignSelf:"center",
                    color:"#D31037",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>VOLTAR PARA HOME</Text>
            </View>
        )
    }
}