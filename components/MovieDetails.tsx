import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

const { height } = Dimensions.get('window');

export function MovieDetails() {
  const movieName = 'Colombiana';

  return (
    <View style={styles.detailsContainer}>
      {/*  title */}
      <Text style={styles.title}>
        {movieName}
      </Text>

      {/*  status, realise, runtime */}
      <Text style={styles.info}>
        Released • 2011 • 108 min
      </Text>

      {/* genres */}
      <View style={styles.genres}>
        <Text style={styles.info}>
          Action •
        </Text>

        <Text style={styles.info}>
          Thriller •
        </Text>

        <Text style={styles.info}>
          Crime
        </Text>
      </View>

      {/* description */}
      <Text style={styles.description}>
        A young woman grows up to be a stone-cold assassin after witnessing her parents' murder as a child in Bogota.
        She works for her uncle as a hitman by day, but her personal time is spent engaging in vigilante murders that
        she hopes will lead her to her ultimate target - the mobster responsible for her parents' death
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
  },
  description: {
    color: theme.colors.bgNeutral400,
    marginHorizontal: 16,
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify'
  },
});