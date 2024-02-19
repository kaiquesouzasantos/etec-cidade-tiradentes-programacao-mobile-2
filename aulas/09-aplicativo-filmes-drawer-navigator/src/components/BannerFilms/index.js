import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { LISTA_FILMES } from '../../data/movies'
import { useNavigation } from '@react-navigation/native';

export default function BannerFilms() {
    const navigation = useNavigation();

    const imagem = Math.floor(Math.random() * (LISTA_FILMES.length - 1))
    const filme = LISTA_FILMES[imagem]

    return(
        <>
            <Text style={styles.textBanner}> Em cartaz </Text>

            <TouchableOpacity 
                onPress = { () => navigation.navigate('DetailsFilms', {titulo:filme.nome, imagem:filme.imagem, nota:filme.nota, descricao:filme.descricao})}
                style = {styles.containerBanner}
            >
                <Image
                    style={styles.imageBanner}
                    source = {{uri: filme.imagem}}
                    resizeMode = 'cover'
                />
            </TouchableOpacity>
        </>
    )
}
