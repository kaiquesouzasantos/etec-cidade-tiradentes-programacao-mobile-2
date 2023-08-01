import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardSerie(props){
    const navigation = useNavigation();

    return(
        <TouchableOpacity style ={styles.containerSerie} onPress = { () => navigation.navigate('DetailsSerie', {titulo:props.nome, imagem:props.imagem, nota:props.nota, episodios:props.episodios, descricao:props.descricao})}>
            <Image style = {styles.imagemSerie} source = {require('../../img/'+props.imagem)}/>
            <Text style = {styles.tituloSerie}> {props.nome} </Text>
            <Text style = {styles.notaSerie}> {props.nota} </Text>
            <Text style = {styles.episodios}> {props.episodios} episodios</Text>
        </TouchableOpacity>
    );
}