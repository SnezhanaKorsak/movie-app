import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { theme } from '../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '../types';

type MovieScreenRouteProp = NativeStackNavigationProp<RootStackParamList, 'Movie'>;

type Props = {
  results: Movie[];
}
const { width, height } = Dimensions.get('window');

export function FoundMovieList({ results }: Props) {
  const navigation = useNavigation<MovieScreenRouteProp>();

  const redirectToMovieScreen = (itemId: number) => () => navigation.push('Movie', { itemId });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, }}
      style={styles.scrollContainer}
    >
      <Text style={styles.title}>Results ({results.length})</Text>

      <View style={styles.resultsBlock}>
        {results.map(({ id, poster, name, enName, alternativeName }) => {
          const movieName = name || enName || alternativeName;
          const source = poster.url ? { uri: poster.url } : require('../assets/no_image.jpg');
          const formatedMovieName = movieName.length > 15 ? movieName.slice(0, 15) + '...' : movieName;

          return (
            <TouchableWithoutFeedback
              key={id}
              onPress={redirectToMovieScreen(id)}
            >
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.image}
                  source={source}
                />
                <Text style={styles.name}>{formatedMovieName}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    columnGap: 12,
  },
  title: {
    fontWeight: 'semibold',
    color: theme.colors.white,
    marginLeft: 4,
    fontSize: 20,
    lineHeight: 28,
  },
  resultsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  imageWrapper: {
    rowGap: 8,
    marginBottom: 20,
  },
  image: {
    borderRadius: 24,
    width: width * 0.44,
    height: height * 0.3,
  },
  name: {
    color: theme.colors.white,
    marginLeft: 4,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});