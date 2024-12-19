import { View, StyleSheet, SafeAreaView, StatusBar, Text, Animated } from 'react-native';
import { theme } from '../theme';
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline';
import ScrollView = Animated.ScrollView;
import { TrendingMoviesList } from '../components/TrendingMoviesList';
import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MovieList';
import { SearchButton } from '../components/SearchButton';
import { Loading } from '../components/Loading';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/movies';
import { GetMovieResponse, Movie } from '../types';
import { sortedByRating } from '../utils';

export default function HomeScreen() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    setLoading(true);

    const data: GetMovieResponse = await fetchTrendingMovies();

    try {
      const sortedList = sortedByRating(data.docs);
      setTrendingMovies(sortedList);

    } finally {
      setLoading(false);
    }
  };

  const getUpcomingMovies = async () => {
    setLoading(true);

    const data: GetMovieResponse = await fetchUpcomingMovies();

    try {
      const moviesWithPoster = data.docs.filter(item => item.poster);

      setUpcomingMovies(moviesWithPoster);
    } catch (err) {
      setUpcomingMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const getTopRatedMovies = async () => {
    setLoading(true);

    const data: GetMovieResponse = await fetchTopRatedMovies();

    try {
      const sortedList = sortedByRating(data.docs);

      setTopRatedMovies(sortedList);
    } catch (err) {
      setTopRatedMovies([]);
    } finally {
      setLoading(false);
    }
  };

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
            {trendingMovies.length > 0 && <TrendingMoviesList movies={trendingMovies} />}

            {/* upcoming movies row*/}
            {upcomingMovies.length > 0 && <MoviesList title="Скоро" data={upcomingMovies} />}


            {/* top-rated movies row*/}
            {topRatedMovies.length > 0 && <MoviesList title="С высоким рейтингом" data={topRatedMovies} />}
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