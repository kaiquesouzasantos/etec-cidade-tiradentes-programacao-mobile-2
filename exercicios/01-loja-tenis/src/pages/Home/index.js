import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { styles } from './style'
import Shoes from '../../component/Shoes'
import Banner from '../../component/Banner'
import { LIST_SHOES } from '../../data/shoes.list'

export default function Home() {
 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <View style={styles.textContainer}>
            <Text style={styles.text}>DEVSPORT</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>•</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>TENIS MASCULINO</Text>
         </View>
       </View>

      <View style={styles.line}/>
      <Banner/>

      <ScrollView>
        <Text style={styles.textDetail}>LANÇAMENTOS</Text>
        <FlatList
          data = {LIST_SHOES}
          numColumns={2}
          renderItem = {({item, index}) => 
            <Shoes 
              imagem={require('../../assets/'+item.imagem)} preco={item.preco}
              nome={item.nome} tamanho={item.tamanho} quantidade={item.quantidade}
            > 
            </Shoes>
          }
        >
        </FlatList>
      </ScrollView>
   </View>
  )
}
