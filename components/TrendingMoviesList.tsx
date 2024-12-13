import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme';
import Carousel from 'react-native-snap-carousel-v4';
import { MovieCard } from './MovieCard';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';

type Props = {
  movies: number[];
}
const { width } = Dimensions.get('window');

export function TrendingMoviesList({ movies }: Props) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleClick = (item: number) => () => {
    navigation.navigate('Movie', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrendingMovies</Text>
      <Carousel
        data={movies}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick(item)}/>}
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