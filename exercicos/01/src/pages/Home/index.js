import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
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

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[0].imagem)} preco={LIST_SHOES[0].preco}
            nome={LIST_SHOES[0].nome} tamanho={LIST_SHOES[0].tamanho} quantidade={LIST_SHOES[0].quantidade}
          >
          </Shoes>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[1].imagem)} preco={LIST_SHOES[1].preco}
            nome={LIST_SHOES[1].nome} tamanho={LIST_SHOES[1].tamanho} quantidade={LIST_SHOES[1].quantidade}
          >
          </Shoes>         
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[2].imagem)} preco={LIST_SHOES[2].preco}
            nome={LIST_SHOES[2].nome} tamanho={LIST_SHOES[2].tamanho} quantidade={LIST_SHOES[2].quantidade}
          >
          </Shoes>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[3].imagem)} preco={LIST_SHOES[3].preco}
            nome={LIST_SHOES[3].nome} tamanho={LIST_SHOES[3].tamanho} quantidade={LIST_SHOES[3].quantidade}
          >
          </Shoes>         
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[4].imagem)} preco={LIST_SHOES[4].preco}
            nome={LIST_SHOES[4].nome} tamanho={LIST_SHOES[4].tamanho} quantidade={LIST_SHOES[4].quantidade}
          >
          </Shoes>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[5].imagem)} preco={LIST_SHOES[5].preco}
            nome={LIST_SHOES[5].nome} tamanho={LIST_SHOES[5].tamanho} quantidade={LIST_SHOES[5].quantidade}
          >
          </Shoes>         
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[6].imagem)} preco={LIST_SHOES[6].preco}
            nome={LIST_SHOES[6].nome} tamanho={LIST_SHOES[6].tamanho} quantidade={LIST_SHOES[6].quantidade}
          >
          </Shoes>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[7].imagem)} preco={LIST_SHOES[7].preco}
            nome={LIST_SHOES[7].nome} tamanho={LIST_SHOES[7].tamanho} quantidade={LIST_SHOES[7].quantidade}
          >
          </Shoes>         
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[8].imagem)} preco={LIST_SHOES[8].preco}
            nome={LIST_SHOES[8].nome} tamanho={LIST_SHOES[8].tamanho} quantidade={LIST_SHOES[8].quantidade}
          >
          </Shoes>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[9].imagem)} preco={LIST_SHOES[9].preco}
            nome={LIST_SHOES[9].nome} tamanho={LIST_SHOES[9].tamanho} quantidade={LIST_SHOES[9].quantidade}
          >
          </Shoes>         
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[10].imagem)} preco={LIST_SHOES[10].preco}
            nome={LIST_SHOES[10].nome} tamanho={LIST_SHOES[10].tamanho} quantidade={LIST_SHOES[10].quantidade}
          >
          </Shoes>
          <Shoes 
            imagem={require('../../assets/'+LIST_SHOES[11].imagem)} preco={LIST_SHOES[11].preco}
            nome={LIST_SHOES[11].nome} tamanho={LIST_SHOES[11].tamanho} quantidade={LIST_SHOES[11].quantidade}
          >
          </Shoes>         
        </View>
      </ScrollView>
   </View>
  )
}