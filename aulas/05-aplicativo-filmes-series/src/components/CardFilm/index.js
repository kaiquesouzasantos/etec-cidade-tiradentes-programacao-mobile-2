import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import { styles } from './style';

export default function CardFilm(props){
    return(
        <TouchableOpacity style ={styles.containerFilmes}>
            <Image style = {styles.imagemFilmes} source = {require('../../img/'+props.imagem)}/>
            <Text style = {styles.tituloFilmes}> {props.nome} </Text>
            <Text style = { styles.notaFilmes}> {props.nota} </Text>
        </TouchableOpacity>
    );
}