import { StyleSheet, View, FlatList  } from 'react-native'

import BannerFilms from '../../components/BannerFilms'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import CardFilm from '../../components/CardFilm'
import CardSerie from '../../components/CardSerie'
import Title from '../../components/Title'

import { LISTA_FILMES } from '../../data/movies'
import{ LISTA_SERIES } from '../../data/series'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <BannerFilms />

      <Title titulo = {'Filmes'}></Title>
      <View style={{width:"90%"}}>
        <FlatList 
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {LISTA_FILMES}
          keyExtractor = {(item) => item.id} 
          renderItem = {({item}) => (
            <CardFilm
              nome = {item.nome}
              nota = {item.nota}
              imagem = {item.imagem}
              descricao = {item.descricao}
            ></CardFilm>
          )}
        />
      </View>

      <Title titulo = {'Series'}></Title>
      <View style={{width:"90%"}}>
        <FlatList 
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {LISTA_SERIES}
          keyExtractor = {(item) => item.id} 
          renderItem = {({item}) => (
            <CardSerie
              nome = {item.nome}
              nota = {item.nota}
              episodios = {item.episodios}
              imagem = {item.imagem}
              descricao = {item.descricao}
            ></CardSerie>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
  },
});
