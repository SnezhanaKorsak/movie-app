import { TouchableOpacity, Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import { theme } from '../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import { Person } from '../types';

type Props = {
  cast: Person[];
}

type PersonScreenRouteProp = NativeStackNavigationProp<RootStackParamList, 'Person'>;

export function Cast({ cast }: Props) {
  const navigation = useNavigation<PersonScreenRouteProp>();

  const getActors = () => {
    if (cast.length === 0) {
      return [];
    }

    const actors = cast.filter(({ profession }) => profession === 'актеры');

    return actors?.length >= 10 ? actors.slice(0, 10) : actors;
  };
  const topPersons = getActors();

  const redirectToPersonScreen = (personId: number) => () => navigation.navigate('Person', { personId });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Актеры</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {topPersons.map(({ id, photo, name, enName }) => {
          const actorName = name || enName;

          return (
            <TouchableOpacity
              key={id}
              style={styles.personItem}
              onPress={redirectToPersonScreen(id)}
            >
              <View style={styles.personAvatarBlock}>
                <Image
                  source={{ uri: photo }}
                  style={styles.avatar}
                />
              </View>

              <Text style={styles.personName}>
                {
                  actorName.length > 10 ? actorName.slice(0, 10) + '...' : actorName
                }
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
    lineHeight: 28,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingRight: 20,
  },
  personItem: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  personName: {
    color: theme.colors.white,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
  personAvatarBlock: {
    overflow: 'hidden',
    borderRadius: '50%',
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.bgNeutral400,
  },
  avatar: {
    width: 80,
    height: 86,
    borderRadius: 15,
  }
});