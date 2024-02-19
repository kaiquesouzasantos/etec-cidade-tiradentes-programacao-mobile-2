import React from 'react'
import { Text, Image } from 'react-native'
import { styles } from './style'

export default function Banner() {
    return(
        <>
            <Text style={styles.textBanner}> Em cartaz </Text>

            <Image 
                style={styles.imageBanner}
                source = {require('../../assets/banner.png')}
            />
        </>
    )
}