import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native"
import { styles } from "./style"
import Footer from "../footer"

export default function Form(){
    const [usuario, setUsuario] = useState(null)
    const [senha, setSenha] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    function verificaPreenchimento(){
        if((usuario == null) || (senha == null)){
            Vibration.vibrate() 
            setErrorMessage('campo obrigatorio*')
        } else {
            setErrorMessage(null)
        }
    }

    return(
        <View style = {styles.formContext}>
            <View style = {styles.form}>
                <Text style = {styles.formLabel}>Usuario</Text>
                <Text style = {styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText = {setUsuario}
                        value = {usuario}
                        placeholder="Ex: Jose Cabeca de Pamonha"
                        keyboardType="text"
                    ></TextInput>

                    <Text style = {styles.formLabel}>Senha</Text>
                    <Text style = {styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText = {setSenha}
                        value = {senha}
                        placeholder="Ex: djsad789"
                        keyboardType="text"
                    ></TextInput>

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => verificaPreenchimento()}
                    >
                        <Text style = {styles.textButton}>Login</Text>
                    </TouchableOpacity>

                    <Footer/>
                </View>
        </View>
    )
}