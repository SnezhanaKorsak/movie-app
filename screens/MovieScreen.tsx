import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigation';
import { useEffect, useState } from 'react';
import { theme } from '../theme';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import { Cast } from '../components/Cast';
import { MoviesList } from '../components/MovieList';

type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movie'>;

const { width, height } = Dimensions.get('window');

export default function MovieScreen() {
  const route = useRoute<MovieScreenRouteProp>();
  const navigation = useNavigation();

  const [isFavourite, setIsFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

  const { item } = route.params;

  const movieName = 'Colombiana';

  useEffect(() => {
    //call the movie details api
  }, [item]);

  const goBackHandle = () => navigation.goBack();

  const addToFavourite = () => setIsFavourite((prev) => !prev);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={styles.scrollWrapper}
    >
      {/*  back button and movie poster */}
      <View style={styles.content}>
        <SafeAreaView style={styles.iconsBlock}>
          <TouchableOpacity style={styles.chevronIcon} onPress={goBackHandle}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color={theme.colors.white}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={addToFavourite}>
            <HeartIcon size="35" color={theme.colors[isFavourite ? 'textPrimary' : 'white']}/>
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={require('../assets/moviePoster.jpg')}
            style={{
              width,
              height: height * 0.55,
            }}
          />

          <LinearGradient
            colors={['transparent', theme.colors.bgNeutral900Opacity, theme.colors.bgNeutral800]}
            style={styles.gradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
          />
        </View>
      </View>

      {/*  movie details */}
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

      {/* cast */}
      <Cast cast={cast}/>

      {/*similar movies */}
      <MoviesList title="Similar Movies" data={similarMovies} hideSeeAllButton/>
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
  },
  chevronIcon: {
    borderRadius: 10,
    padding: 4,
    backgroundColor: theme.colors.bgPrimary,
  },
  gradient: {
    width,
    height: height * 0.4,
    position: 'absolute',
    bottom: 0,
  },
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
  },
  castBlock: {}
});