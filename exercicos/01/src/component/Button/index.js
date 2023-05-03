import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { styles } from './style'

export default function Button() {
 return (
   <View style={styles.container}>
       <TouchableOpacity style={styles.btnContainer}>
           <Text style={styles.title}>COMPRAR</Text>
       </TouchableOpacity>
   </View>
  )
}