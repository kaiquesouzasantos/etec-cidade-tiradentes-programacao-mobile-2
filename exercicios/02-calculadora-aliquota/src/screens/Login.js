import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component{

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
                     marginTop: 40,
                     alignSelf:"center",
                 }}
                >IMPOSTO DE RENDA</Text>

                <Text
                style={{
                    fontSize:25,
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:15,
                   
                    opacity:0.4
                }}
                >
                    Inserir Dados.
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
                        placeholder="NOME"
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
                    <Icon name="profile" color="#D31037" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="CPF"
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
                       //secureTextEntry
                        placeholder="RENDIMENTO"
                        placeholderTextColor="#D31037"
                        style={{paddingHorizontal:10}}
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
                    }}>CONCLUÍDO</Text>

                    
                </View>  

                <View style={{
                    backgroundColor: '#000',
                    marginTop: 30
                }}>
                
                <Text
                style={{
                    fontSize:25,
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:50,
                    color:'#fff',
                }}
                >
                    Gerenciar Usuários.
                </Text>
                    <Text
                    onPress={()=>navigate('Adicionar')}
                    
                    style={{
                        textAlign:"center",
                        zIndex:99,
                        alignItems:"center",
                        color:"#fff",
                        padding: 5,
                        fontFamily:"SemiBold",
                        paddingVertical:30,
                        borderRadius:3,
                        backgroundColor:'#D31037',
                        borderColor:'#fff',
                        borderWidth: 3,
                        width: '38%',
                        marginTop:50,
                        margin:40
                    }}>ADICIONAR</Text>

                    <Text
                    onPress={()=>navigate('Listar')}
                    
                    style={{
                        textAlign:"center",
                        zIndex:99,
                        marginHorizontal:'52%',
                        alignItems:'center',
                        color:"#fff",
                        padding: 5,
                        fontFamily:"SemiBold",
                        paddingVertical:30,
                        borderRadius:3,
                        backgroundColor:'#D31037',
                        borderColor:'#fff',
                        borderWidth: 3,
                        width: '38%',
                        marginTop: -121,
                        margin:40
                    }}>LISTAR</Text>
                    <Text
                    onPress={()=>navigate('Delete')}
                    
                    style={{
                        position:"relative",
                        textAlign:"center",
                        zIndex:99,
                        marginHorizontal:'52%',
                        alignItems:"center",
                        color:"#fff",
                        padding: 5,
                        fontFamily:"SemiBold",
                        paddingVertical:30,
                        borderRadius:3,
                        backgroundColor:'#D31037',
                        borderColor:'#fff',
                        borderWidth: 3,
                        width: '38%',
                        marginTop: -25,
                        margin:40
                    }}>DELETAR</Text>

                    <Text
                    onPress={()=>navigate('Atualizar')}
                    
                    style={{
                        textAlign:"center",
                        zIndex:99,
                        alignItems:"center",
                        color:"#fff",
                        padding: 5,
                        fontFamily:"SemiBold",
                        paddingVertical:30,
                        borderRadius:3,
                        backgroundColor:'#D31037',
                        borderColor:'#fff',
                        borderWidth: 3,
                        width: '38%',
                        marginTop:-122,
                        margin:40
                    }}>ATUALIZAR</Text>
                </View>
            </View>
            
        )


        
    }
}
