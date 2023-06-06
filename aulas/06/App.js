import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('TESTE')
  const [entrada, setEntrada] = useState(null)

  useEffect(() => {
    (
      async function() {
        let nome = await AsyncStorage.getItem('nome')
        
        if(nome !== null)
          setNome(nome)
      }
    )()
  }, [])

  useEffect(() => {
    (
      async function() {
        await AsyncStorage.setItem('nome', nome)
      }
    )()
  }, [nome])

  return (
    <View style={styles.context}>
      <Text style = {styles.label}>{nome}</Text>
      <TextInput 
        placeholder = "Digite seu nome" 
        style = {styles.input} 
        onChangeText = {(texto) => setEntrada(texto)}
      ></TextInput>
      <Button title= "Alterar Nome" style = {styles.button} onPress = {() => setNome(entrada)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  context: {
    flex: 1,
    backgroundColor:'#e0e5e5',
    paddingTop: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    width: '100%'
  }, 
  label: {
    color: '#000000',
    fontSize: 20,
    paddingTop: 20
  },
  input: {
      width: '90%',
      height: 40,
      margin: 12,
      paddingLeft: 20,
      borderRadius: 50,
      backgroundColor: '#f6f6f6'
  },
  button: {
      width: '90%',
      height: 40,
      borderRadius: 50,
      backgroundColor: '#FF0043',
      paddingTop: 14,
      marginLeft: 12,
      marginTop: 30
  }
});