import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/core'
import { styles } from './style'
import StarRating from 'react-native-star-rating-widget'

export default function DetailsSerie(){
    const objeto = useRoute().params

    return(
        <View style = {styles.containerDetail}>
          <Image 
                style = {styles.imageDetail}
                source = {require('../../img/'+objeto.imagem)}
                resizeMode = 'cover'
          />
          <Text style = {styles.titleSinopseDetail}>{objeto.titulo}</Text>
          <View style = {styles.linhaUnica}>
            <StarRating style = {styles.starRating}
              starSize={20}
              enableSwiping={false}
              maxStars={10}
              rating={Number(objeto.nota)}
              onChange={() => {}}
            ></StarRating>
            <Text style = {styles.textStar}>{objeto.nota}/10</Text>
          </View>
          <Text style = {styles.titleSinopseDetail}>Sinopse</Text>
          <Text style = {styles.sinopseDetail}>{objeto.episodios} Episodios</Text>
          <Text style = {styles.sinopseDetail}>{objeto.descricao}</Text>
        </View> 
    )
}