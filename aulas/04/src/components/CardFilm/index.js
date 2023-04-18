import React from 'react'
import {Image, Text, TouchableOpacity} from 'react-native'
import { styles } from './style';

export default function CardFilm(){
    return(
        <TouchableOpacity style ={styles.containerFilmes}>
            <Image style = {styles.imagemFilmes} source = {require('../../img/guerraMundialZ.png')}/>
            <Text style = {styles.tituloFilmes}> Guerra Munfdial Z </Text>
            <Text style = { styles.notaFilmes}> 8,8 </Text>
        </TouchableOpacity>
    );
}