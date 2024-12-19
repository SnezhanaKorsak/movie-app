import { useRoute } from '@react-navigation/native';
import { useEffect, useState, Fragment } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../navigation/AppNavigation';
import { Cast } from '../components/Cast';
import { MoviesList } from '../components/MovieList';
import { BackButton } from '../components/BackButton';
import { FavouriteButton } from '../components/FavouriteButton';
import { MovieDetails } from '../components/MovieDetails';
import { Poster } from '../components/Poster';

import { theme } from '../theme';
import { Loading } from '../components/Loading';
import { Movie } from '../types';
import { fetchMovieDetails } from '../api/movies';

type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movie'>;

export default function MovieScreen() {
  const route = useRoute<MovieScreenRouteProp>();

  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  const { itemId } = route.params;

  useEffect(() => {
    getMoviesDetails();
  }, [itemId]);

  const getMoviesDetails = async () => {
    setLoading(true);

    const data: Movie = await fetchMovieDetails(itemId);

    try {
      setMovieDetails(data);
    } finally {
      setLoading(false);
    }
  };

  if (!movieDetails) {
    return null;
  }

  const {
    persons,
    similarMovies,
    poster,
    ...details
  } = movieDetails;

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={styles.scrollWrapper}
    >
      {/*  back button and movie poster */}
      <View style={styles.content}>
        <SafeAreaView style={styles.iconsBlock}>
          <BackButton />
          <FavouriteButton />
        </SafeAreaView>

        {loading ? <Loading /> : <Poster poster={poster} />}

      </View>

      {!loading && (
        <Fragment>
          {/*  movie details */}
          <MovieDetails details={details} />

          {/* cast */}
          <Cast cast={persons} />

          {/*similar movies */}
          {similarMovies?.length > 0 && <MoviesList title="Похожие фильмы" data={similarMovies} hideSeeAllButton />}

        </Fragment>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
    backgroundColor: theme.colors.bgNeutral800,
  },
  content: {
    width: '100%',
  },
  iconsBlock: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  }
});