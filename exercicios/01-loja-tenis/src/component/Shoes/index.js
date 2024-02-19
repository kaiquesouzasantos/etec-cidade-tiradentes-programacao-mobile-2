import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './style'

export default function Shoes(props) {
 return (
   <TouchableOpacity style={styles.container}>
      <Image
        source={props.imagem}
        style={styles.shoesImg}
      />
      <Text style={styles.shoesText}>
          {props.nome}
      </Text>
      <View>
        <Text>{props.quantidade} und | {props.tamanho}</Text>
      </View>
      <View opacity={0.4}>
        <Text style={styles.detailText}> R${props.preco} </Text>
      </View>
   </TouchableOpacity>
  )
}