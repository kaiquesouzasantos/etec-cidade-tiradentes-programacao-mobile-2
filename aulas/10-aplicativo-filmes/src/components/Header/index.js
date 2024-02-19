import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import { Entypo } from '@expo/vector-icons'


export default function Header() {
    const navigation = useNavigation()

    return(
        <View style={styles.viewHeader}>

        <TouchableOpacity
            onPress = {() => navigation.openDrawer()}
        >
            <Entypo
                style={{justifyContent:'flex-start'}}
                name="menu"
                size={36}
                color="white"
            />
        </TouchableOpacity>
            <Text style={styles.textHeader}> TEC FILMES </Text>
        </View>
    )
}