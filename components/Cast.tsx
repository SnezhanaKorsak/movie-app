import { TouchableOpacity, Dimensions, Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import { theme } from '../theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';

type Props = {
  cast: number[];
}

type PersonScreenRouteProp = NativeStackNavigationProp<RootStackParamList, 'Person'>;

export function Cast({ cast }: Props) {
  const navigation = useNavigation<PersonScreenRouteProp>();

  const actorName = 'Zoe Saldana';
  const characterName = 'Cataleya';

  const redirectToPersonScreen = () => navigation.navigate('Person', { personId: 1 });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Cast</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {cast && cast.map((person, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.personItem}
              onPress={redirectToPersonScreen}
            >
              <View style={styles.personAvatarBlock}>
                <Image
                  source={require('../assets/actor.jpg')}
                  style={styles.avatar}
                />
              </View>

              <Text style={styles.personName}>
                {
                  characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName
                }
              </Text>
              <Text style={styles.characterName}>
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
  characterName: {
    color: theme.colors.bgNeutral400,
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