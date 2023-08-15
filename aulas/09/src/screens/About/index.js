import React from "react";
import { View, Text, Image } from 'react-native'
import { styles } from "./style";

export default function About() {
  return (
    <View style={styles.container}>
    <Image
      source={{uri:'https://media.licdn.com/dms/image/D4D03AQG_G2UMKVYxog/profile-displayphoto-shrink_200_200/0/1678750683745?e=1697673600&v=beta&t=pyPpPkjLg-Zp0PcXUe8B0CPhiWH58vFuOrkN9hG-pgA'}}
      style={styles.image}
    />
    <Text style={styles.name}>Kaique Souza Santos</Text>
    <Text style={styles.description}>
      Bem-vindo ao nosso app de filmes! Aqui, você encontra todos os tipos de filmes: ação, romance, comédia, e muito mais. Navegue pelos filmes, veja trailers, leia sinopses e descubra os favoritos de outros usuários. Você pode criar listas de filmes para assistir depois e receber recomendações personalizadas. Assista online ou baixe para ver offline quando quiser. É a sua central para diversão cinematográfica a qualquer hora, em qualquer lugar!
    </Text>
  </View>
  );
}

