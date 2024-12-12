import { View, StyleSheet, SafeAreaView, StatusBar, Text, TouchableOpacity, Animated } from 'react-native';
import { theme } from '../theme';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import ScrollView = Animated.ScrollView;
import { TrendingMoviesList } from '../components/TrendingMoviesList';
import { useState } from 'react';
import { MoviesList } from '../components/MovieList';

export default function HomeScreen() {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 3]);
  const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 3]);
  const [topRatedMovies, setTopRatedMovies] = useState([1, 2, 3]);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
          <Text style={styles.logo}>
            <Text style={styles.accentLetter}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* trending movies carousel*/}
        <TrendingMoviesList movies={trendingMovies}/>

        {/* upcoming movies row*/}
        <MoviesList title="Upcoming" data={upcomingMovies}/>

        {/* top-rated movies row*/}
        <MoviesList title="Top Rated" data={topRatedMovies}/>
      </ScrollView>
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