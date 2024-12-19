import { Fragment, useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton } from '../components/BackButton';
import { FavouriteButton } from '../components/FavouriteButton';
import { MoviesList } from '../components/MovieList';
import { PersonInfoBlock } from '../components/person/PersonInfoBlock';
import { PersonAvatar } from '../components/person/PersonAvatar';
import { PersonFacts } from '../components/person/PersonFacts';
import { Loading } from '../components/Loading';

import { theme } from '../theme';
import { PersonDetails } from '../types';
import { fetchPersonDetails } from '../api/movies';

type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Person'>;

export default function PersonScreen() {
  const route = useRoute<MovieScreenRouteProp>();

  const [personDetails, setPersonDetails] = useState<PersonDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const { personId } = route.params;

  useEffect(() => {
    getPersonDetails();
  }, [personId]);

  const getPersonDetails = async () => {
    setLoading(true);

    const data: PersonDetails = await fetchPersonDetails(personId);

    try {
      setPersonDetails(data);
    } finally {
      setLoading(false);
    }
  };

  if (!personDetails) {
    return null;
  }

  const {
    photo,
    movies,
    sex,
    birthday,
    age,
    countAwards,
    birthPlace,
    name,
    facts,
  } = personDetails;

  const filteredMovies = movies.filter(({ rating }) => rating);

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.content}>
      {/*  back button */}
      <SafeAreaView style={styles.iconsBlock}>
        <BackButton />
        <FavouriteButton />
      </SafeAreaView>

      {loading
        ? <Loading />
        : (
          <Fragment>
            {/*  person details */}
            <PersonAvatar photo={photo} name={name} birthPlace={birthPlace} />

            <PersonInfoBlock sex={sex} birthday={birthday} age={age} countAwards={countAwards} />

            <PersonFacts facts={facts} />

            {/*  movies */}
            <MoviesList title="Фильмы" data={filteredMovies} hideSeeAllButton />
          </Fragment>
        )
      }
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
});