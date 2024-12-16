import { Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../theme';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import { FoundMovieList } from '../components/FoundMovieList';
import { useState } from 'react';

type HomeScreenRouteProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const { width, height } = Dimensions.get('window');

export function SearchScreen() {
  const navigation = useNavigation<HomeScreenRouteProp>();

  const [results] = useState([1, 2, 3, 4]);

  const redirectToHomeScreen = () => navigation.navigate('Home');

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <TextInput
          placeholder="Search movie"
          placeholderTextColor={theme.colors.lightGray}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={redirectToHomeScreen}
          style={styles.cancelBtn}
        >
          <XMarkIcon size={25} color={theme.colors.white} />
        </TouchableOpacity>
      </View>

      {/* results*/}
      {results.length > 0
        ? <FoundMovieList results={results} />
        : (
          <View style={styles.emptyResults}>
            <Image
              style={styles.image}
              source={require('../assets/movieTime.jpg')}
            />
          </View>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.bgNeutral800,
    paddingVertical: 20,
  },
  content: {
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.bgNeutral400,
    borderRadius: 50,
  },
  input: {
    paddingLeft: 24,
    flex: 1,
    fontWeight: 'semibold',
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.white,
  },
  cancelBtn: {
    borderRadius: '50%',
    padding: 12,
    margin: 4,
    backgroundColor: theme.colors.bgNeutral400,
  },
  emptyResults: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 50,
  }
});