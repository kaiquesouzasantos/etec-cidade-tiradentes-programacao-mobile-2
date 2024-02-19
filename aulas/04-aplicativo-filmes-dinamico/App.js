import { StyleSheet, View, FlatList  } from 'react-native'

import BannerFilms from './src/components/BannerFilms'
import Header from './src/components/Header'
import SearchBar from './src/components/SearchBar'
import CardFilm from './src/components/CardFilm'

import { LISTA_FILMES } from './src/data/movies'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <BannerFilms />

      <View style={{width:"90%"}}>
        <FlatList 
          horizontal ={true}
          data = {LISTA_FILMES}
          keyExtractor = {(item) => item.id} 
          renderItem = {({item}) => (
            <CardFilm></CardFilm>
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
