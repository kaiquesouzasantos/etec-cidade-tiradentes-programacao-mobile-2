import { StyleSheet, View, FlatList  } from 'react-native'

import BannerFilms from './src/components/BannerFilms'
import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'
import CardFilm from './src/components/CardFilm'
import CardSerie from './src/components/CardSerie'
import Title from './src/components/Title'

import { LISTA_FILMES } from './src/data/movies'
import{ LISTA_SERIES } from './src/data/series'

export default function App() {
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
