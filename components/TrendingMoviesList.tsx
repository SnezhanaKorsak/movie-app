import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel-v4';

import { MovieCard } from './MovieCard';

import { theme } from '../theme';
import { Movie } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

type Props = {
  movies: Movie[];
}
const { width } = Dimensions.get('window');

type MovieScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Movie'>;

export function TrendingMoviesList({ movies }: Props) {
  const navigation = useNavigation<MovieScreenNavigationProp>();

  const handleClick = (item: number) => () => {
    navigation.navigate('Movie', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrendingMovies</Text>
      <Carousel
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} handleClick={handleClick(item.id)} />}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={styles.slideStyle}
        vertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  text: {
    color: theme.colors.white,
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 20,
    marginLeft: 20,
  },
  slideStyle: {
    alignItems: 'center',
  }
});