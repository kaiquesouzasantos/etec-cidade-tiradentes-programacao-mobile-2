import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { AppLoading } from 'expo'
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton'
import Home from './src/pages/Home'

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <Home/>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
    </>
  )
}