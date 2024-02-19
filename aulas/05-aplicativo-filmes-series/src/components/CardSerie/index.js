import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import { styles } from './style';

export default function CardSerie(props){
    return(
        <TouchableOpacity style ={styles.containerSerie    }>
            <Image style = {styles.imagemSerie} source = {require('../../img/'+props.imagem)}/>
            <Text style = {styles.tituloSerie}> {props.nome} </Text>
            <Text style = {styles.notaSerie}> {props.nota} </Text>
            <Text style = {styles.episodios}> {props.episodios} episodios</Text>
        </TouchableOpacity>
    );
}