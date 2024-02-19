import { StyleSheet, View, FlatList  } from 'react-native'

import BannerFilms from '../../components/BannerFilms'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import CardFilm from '../../components/CardFilm'
import CardSerie from '../../components/CardSerie'
import Title from '../../components/Title'
import React,{useState, useEffect} from 'react'

export default function Home() {

  const [filmes,setFilmes] = useState([])

  useEffect(() => {

    async function getFilmes(){
      try{
      const response = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=439d9eef344a3af35f7c05dcf5837199")
      const data = await response.json()

      setFilmes(data.results)
    }
    catch(error) {
      console.error("REQUISIÇÃO FALHO",error)
    }
  }
  getFilmes()

  },[] )

 const [series,setSeries] = useState([])

  useEffect(() => {

    async function getSeries(){
      try{
      const response = await fetch ("https://api.themoviedb.org/3/tv/popular?api_key=439d9eef344a3af35f7c05dcf5837199")
      const data = await response.json()
      setSeries(data.results)
    }
    catch(error) {
      console.error("REQUISIÇÃO FALHO",error)
    }
  }
  getSeries()

  },[] )

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
          data = {filmes}
          keyExtractor = {(item) => item.id} 
          renderItem = {({item}) => (
            <CardFilm
              nome = {item.title}
              nota = {item.vote_average}
              imagem = {item.poster_path}
              descricao = {item.overview}
            ></CardFilm>
          )}
        />
      </View>


      <Title titulo = {'Series'}></Title>
      <View style={{width:"90%"}}>
        <FlatList 
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {series}
          keyExtractor = {(item) => item.id} 
          renderItem = {({item}) => (
            <CardSerie
              nome = {item.name}
              nota = {item.vote_average}
              //episodios = {item.episodios}
              imagem = {item.poster_path}
              descricao = {item.overview}
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
