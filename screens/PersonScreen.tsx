import { Dimensions, StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { theme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../components/BackButton';
import { FavouriteButton } from '../components/FavouriteButton';
import { MoviesList } from '../components/MovieList';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function PersonScreen() {
  const [movies] = useState([1, 2, 3, 4, 5]);
  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.content}>
      {/*  back button */}
      <SafeAreaView style={styles.iconsBlock}>
        <BackButton />
        <FavouriteButton />
      </SafeAreaView>

      {/*  person details */}
      <View>
        <View style={styles.details}>
          <View style={styles.imageMask}>
            <Image
              source={require('../assets/actor.jpg')}
              style={styles.avatar}
            />
          </View>
        </View>

        <View style={styles.description}>
          <Text style={styles.mainText}>Zoe Saldana</Text>
          <Text style={styles.subText}>London, United Kingdom</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoBlock}>
          <Text style={styles.infoMainText}>Gender</Text>
          <Text style={styles.infoSubText}>Mail</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoMainText}>Birthday</Text>
          <Text style={styles.infoSubText}>1978-06-19</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={[styles.infoMainText]}>Age</Text>
          <Text style={styles.infoSubText}>46</Text>
        </View>
        <View style={[styles.infoBlock, { borderRightWidth: 0 }]}>
          <Text style={[styles.infoMainText]}>Awards</Text>
          <Text style={styles.infoSubText}>10</Text>
        </View>
      </View>

      <View style={styles.factsBlock}>
        <Text style={styles.blockTitle}>Facts</Text>
        <Text style={[styles.subText, { textAlign: 'justify', marginTop: 12 }]}>
          Zoe Saldana was born on June 19, 1978 in Passaic, New Jersey, to Asalia Nazario and Aridio Saldaña. Her father
          was Dominican and her mother is Puerto Rican. She was raised in Queens, New York. When she was 10 years old,
          she and her family moved to the Dominican Republic, where they would live for the next seven years. While
          living there, Zoe discovered a keen interest in performance dance and began her training at the prestigious
          ECOS Espacio de Danza Dance Academy where she learned ballet as well as other dance forms.
        </Text>
      </View>

      {/*  person details */}
      <MoviesList title="Movies" data={movies} hideSeeAllButton />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.bgNeutral800,
  },
  content: {
    paddingBottom: 20
  },
  iconsBlock: {
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
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageMask: {
    overflow: 'hidden',
    borderRadius: '50%',
    width: 270,
    height: 270,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.colors.bgNeutral400,
  },
  avatar: {
    width: width * 0.74,
    height: height * 0.43,
  },
  description: {
    marginTop: 24,
  },
  mainText: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.white,
  },
  subText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: theme.colors.bgNeutral400,
  },
  infoContainer: {
    marginHorizontal: 12,
    marginTop: 24,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.bgNeutral700,
    borderRadius: 25,
  },
  infoBlock: {
    borderRightWidth: 2,
    borderRightColor: theme.colors.bgNeutral400,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  infoMainText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'semibold',
    color: theme.colors.white,
  },
  infoSubText: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.bgNeutral400,
  },
  factsBlock: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  factsText: {
    fontSize: 18,
    lineHeight: 28,
    color: theme.colors.white,
  },
  blockTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: theme.colors.white,
  }
});