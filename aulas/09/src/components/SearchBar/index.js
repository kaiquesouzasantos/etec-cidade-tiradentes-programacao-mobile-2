import React from "react"
import { TextInput, View } from "react-native"
import { styles } from "./style"

export default function SearchBar() {
    return(
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar filmes..."
      />
    </View>
    )
}