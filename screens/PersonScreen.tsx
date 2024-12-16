import { Fragment, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton } from '../components/BackButton';
import { FavouriteButton } from '../components/FavouriteButton';
import { MoviesList } from '../components/MovieList';
import { PersonInfoBlock } from '../components/person/PersonInfoBlock';
import { PersonAvatar } from '../components/person/PersonAvatar';
import { PersonFacts } from '../components/person/PersonFacts';
import { Loading } from '../components/Loading';

import { theme } from '../theme';

export default function PersonScreen() {
  const [movies] = useState([1, 2, 3, 4, 5]);
  const [loading] = useState(false);

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
            <PersonAvatar />

            <PersonInfoBlock />

            <PersonFacts />

            {/*  movies */}
            <MoviesList title="Movies" data={movies} hideSeeAllButton />
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