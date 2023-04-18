import { StyleSheet, View } from 'react-native';

import BannerFilms from './src/components/BannerFilms';
import Header from './src/components/Header';
import SerchBar from './src/components/SerchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SerchBar />
      <BannerFilms />
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
