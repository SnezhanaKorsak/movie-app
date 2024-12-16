import { Dimensions, Image, StyleSheet, View } from 'react-native';

import { FoundMovieList } from '../components/FoundMovieList';
import { useState } from 'react';
import { Search } from '../components/SearchLayout';
import { Loading } from '../components/Loading';

import { theme } from '../theme';

const { width, height } = Dimensions.get('window');

export function SearchScreen() {
  const [results] = useState([1, 2, 3, 4]);
  const [loading] = useState(false);

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <Search />
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Search />

      {/* results*/}
      {results.length > 0
        ? <FoundMovieList results={results} />
        : (
          <View style={styles.emptyResults}>
            <Image
              style={styles.image}
              source={require('../assets/movieTime.jpg')}
            />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.bgNeutral800,
    paddingVertical: 20,
  },
  emptyResults: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 50,
  }
});