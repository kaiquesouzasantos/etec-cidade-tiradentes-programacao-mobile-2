import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

export default function CardFilm(props){
    const navigation = useNavigation()

    return(
        <TouchableOpacity onPress = {() => navigation.navigate('Details')} style ={styles.containerFilmes}>
            <Image style = {styles.imagemFilmes} source = {require('../../img/'+props.imagem)}/>
            <Text style = {styles.tituloFilmes}> {props.nome} </Text>
            <Text style = { styles.notaFilmes}> {props.nota} </Text>
        </TouchableOpacity>
    );
}