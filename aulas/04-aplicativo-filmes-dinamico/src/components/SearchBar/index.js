import React from "react"
import { TextInput, View } from "react-native"
import { styles } from "./style"

export default function SearchBar() {
    return(
        <View style={styles.containerSearch}>
            <TextInput 
                placeholder="Digite o filme desejado"
                style={styles.inputSearch}
            >

            </TextInput>
        </View>
    )
}