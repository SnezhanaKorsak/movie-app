import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, Dimensions } from 'react-native';
import { theme } from '../theme';
import ScrollView = Animated.ScrollView;
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Movie } from '../types';
import { formatMovieName } from '../utils';

type Props = {
  title: string;
  data: Movie[];
  hideSeeAllButton?: boolean;
}

type MovieScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Movie'>;

const { width, height } = Dimensions.get('window');

export function MoviesList({ title, data, hideSeeAllButton }: Props) {
  const navigation = useNavigation<MovieScreenNavigationProp>();

  const handleClick = () => {
    navigation.push('Movie', { item: 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {!hideSeeAllButton && (
          <TouchableOpacity>
            <Text style={styles.text}>See All</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map(({ id, enName, name, alternativeName, poster }) => {
          const movieName = enName || name || alternativeName;
          const source = poster ? { uri: poster.url } : require('../assets/no_image.jpg');

          return (
            <TouchableOpacity key={id} onPress={handleClick}>
              <View style={styles.movieListContainer}>
                <Image
                  source={source}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 25,
                  }}
                />

                {movieName && <Text style={styles.movieName}>{formatMovieName(movieName, 14)}</Text>}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    marginTop: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.white,
    fontSize: 20,
    lineHeight: 28,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    lineHeight: 28,
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  movieName: {
    color: theme.colors.textNeutral300,
    marginLeft: 4,
  },
  movieListContainer: {
    marginTop: 4,
    marginRight: 16,
  }
});