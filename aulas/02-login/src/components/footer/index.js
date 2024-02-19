import React, {useState} from "react"
import { View, Text, Pressable } from "react-native"
import { styles } from "./style"

export default function Footer(){
    const [mensagem, setMensagem] = useState(null)

    function mudaTela(){
        setMensagem('Tela em Desenvolvimento Chefe')
    }

    return(
        <View style = {styles.boxComponent}>
            <Pressable onPress = {() => mudaTela()}>
                <Text style = {styles.textComponent}>Esqueceu a Senha</Text>
            </Pressable>

            <Pressable onPress = {() => mudaTela()}>
                <Text style = {styles.textComponent}>Criar Conta</Text>
            </Pressable>

            <Text style = {styles.messageComponent}>{mensagem}</Text>
        </View>
    )
}