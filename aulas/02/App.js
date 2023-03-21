import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from './src/components/form';
import Title from './src/components/title';

export default function App() {
  return (
    <View style = {estilo.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:'#e0e5e5',
      paddingTop: '35%'
  }
})