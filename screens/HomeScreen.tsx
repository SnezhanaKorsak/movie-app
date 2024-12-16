import { View, StyleSheet, SafeAreaView, StatusBar, Text, Animated } from 'react-native';
import { theme } from '../theme';
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline';
import ScrollView = Animated.ScrollView;
import { TrendingMoviesList } from '../components/TrendingMoviesList';
import { useState } from 'react';
import { MoviesList } from '../components/MovieList';
import { SearchButton } from '../components/SearchButton';
import { Loading } from '../components/Loading';

export default function HomeScreen() {
  const [trendingMovies] = useState([1, 2, 3]);
  const [upcomingMovies] = useState([1, 2, 3]);
  const [topRatedMovies] = useState([1, 2, 3]);
  const [loading] = useState(false);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text style={styles.logo}>
            <Text style={styles.accentLetter}>M</Text>ovies
          </Text>

          <SearchButton />
        </View>
      </SafeAreaView>

      {loading
        ? <Loading />
        : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {/* trending movies carousel*/}
            <TrendingMoviesList movies={trendingMovies} />

            {/* upcoming movies row*/}
            <MoviesList title="Upcoming" data={upcomingMovies} />

            {/* top-rated movies row*/}
            <MoviesList title="Top Rated" data={topRatedMovies} />
          </ScrollView>
        )
      }


    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.bgNeutral800,
  },
  container: {
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: theme.colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  accentLetter: {
    color: theme.colors.textPrimary
  },
  scrollContainer: {
    paddingBottom: 10,
  }
});