import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme';

type Props = {
  movieName: string;
}
const { width, height } = Dimensions.get('window');

export function MovieCardWithoutImage({ movieName }: Props) {
  return (
    <View
      style={styles.card}
    >
      <Text style={styles.movieName}>{movieName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.33,
    height: height * 0.22,
    borderRadius: 25,
    backgroundColor: theme.colors.bgNeutral700,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.bgPrimary,
  },
  movieName: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  }
});