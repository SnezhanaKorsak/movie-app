import { Dimensions, Image, Keyboard, StyleSheet, View } from 'react-native';

import { FoundMovieList } from '../components/FoundMovieList';
import { useCallback, useState } from 'react';
import { Search } from '../components/SearchLayout';
import { Loading } from '../components/Loading';

import { theme } from '../theme';
import { Movie } from '../types';
import { fetchMovieByName } from '../api/movies';
import debounce from 'lodash/debounce';

const { width, height } = Dimensions.get('window');

export function SearchScreen() {
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (value: string) => {
    if (value && value.length > 2) {

      setLoading(true);

      fetchMovieByName(value)
        .then(data => {
          setResults(data.docs);
          Keyboard.dismiss();
        })
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 800), []);

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <Search handleSearch={handleTextDebounce} />
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Search handleSearch={handleTextDebounce} />

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