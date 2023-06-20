import React from 'react'
import { Text, Image } from 'react-native'
import { styles } from './style'
import { LISTA_FILMES } from '../../data/movies'

export default function BannerFilms() {
    const imagem = Math.floor(Math.random() * LISTA_FILMES.length + 1)

    return(
        <>
            <Text style={styles.textBanner}> Em cartaz </Text>

            <Image 
                style={styles.imageBanner}
                source = { require(`../../img/${LISTA_FILMES[imagem].imagem}` ) }
            />
        </>
    )
}
