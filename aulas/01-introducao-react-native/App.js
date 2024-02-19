import { LinearGradient } from 'expo-linear-gradient';
import { estilo } from './src/styles';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';  

export default function App() {
  return (
    <View style={estilo.container}>
      <LinearGradient 
        colors = {['#e60079', '#9B00D3']}
        style = {estilo.gradientBackground}
      >
      </LinearGradient>
      <View style = {estilo.box}>
      <Image 
          source = {{uri: 'https://cdn-icons-png.flaticon.com/512/2875/2875337.png'}} 
          style = {estilo.image}
        ></Image>
        <View style = {estilo.viewIcon}>
          <Feather name="user" size={24} color="black"/>
          <TextInput style = {estilo.input} placeholder = 'e-mail'/>
        </View>

        <View style = {estilo.viewIcon}>
          <Ionicons name="key" size={24} color="black"/>
          <TextInput style = {estilo.input} placeholder = 'senha'/>
        </View>

        <TouchableOpacity style = {estilo.button}>
          <Text style = {estilo.textButton}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}