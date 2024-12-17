import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import { Movie } from '../types';

const { height } = Dimensions.get('window');

type Props = {
  details: Omit<Movie, 'persons' | 'similarMovies' | 'poster'>;
}

export function MovieDetails({ details }: Props) {
  const {
    name,
    alternativeName,
    enName, year,
    movieLength,
    genres,
    description
  } = details;

  const movieName = enName || name || alternativeName;

  return (
    <View style={styles.detailsContainer}>
      {/*  title */}
      <Text style={styles.title}>
        {movieName}
      </Text>

      {/*  status, realise, runtime */}
      <Text style={styles.info}>
        Релиз • {year || '~'} • {movieLength} min
      </Text>

      {/* genres */}
      <View style={styles.genres}>
        {genres.map(({ name }, index) => {
          const transformedName = name[0].toUpperCase() + name.substring(1);
          const showPoint = index !== genres.length - 1;

          return (
            <Text style={styles.info} key={name}>
              {transformedName} {showPoint && '•'}
            </Text>
          );
        })}
      </View>

      {/* description */}
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: -(height * 0.09),
    rowGap: 12,
  },
  title: {
    color: theme.colors.white,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
  },
  info: {
    color: theme.colors.bgNeutral400,
    fontWeight: 'semibold',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 28,
  },
  genres: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
    columnGap: 8,
    flexWrap: 'wrap',
  },
  description: {
    color: theme.colors.bgNeutral400,
    marginHorizontal: 16,
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify'
  },
});