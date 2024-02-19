import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Atualizar extends React.Component{

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
                    Atualizar Usuário.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:40,
                    borderWidth:3,
                    marginTop:40,
                    paddingHorizontal:10,
                    borderColor:"#D31037",
                    borderRadius:3,
                    paddingVertical:2,
                    height: 50
                }}>
                    <Icon name="user" color="#D31037" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="ID DO USUÁRIO"
                        placeholderTextColor="#D31037"
                    />

                 

                </View>

                

                <View style={{
                     flexDirection:"row",
                     alignItems:"center",
                     marginHorizontal:40,
                     borderWidth:3,
                     marginTop:10,
                     paddingHorizontal:10,
                     borderColor:"#D31037",
                     borderRadius:3,
                     paddingVertical:2,
                     height: 50
                }}>
                    <Icon name="mail" color="#D31037" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="RENDIMENTO"
                        placeholderTextColor="#D31037"
                    />

                   

                </View>              

                <View style={{
                    marginHorizontal:40,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,
                    backgroundColor:"#D31037",
                    paddingVertical:2,
                    borderRadius:3,
                    borderColor:'white',
                    height:40
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>ATUALIZAR</Text>
                </View>

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