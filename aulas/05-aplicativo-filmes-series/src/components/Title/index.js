import React from "react"
import { Text } from "react-native"
import { styles } from './style'

export default function Title({titulo}) {
    return <Text style={styles.title}> {titulo} </Text>
}