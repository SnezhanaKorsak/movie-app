import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';

export function PersonFacts() {
  return (
    <View style={styles.factsBlock}>
      <Text style={styles.blockTitle}>Facts</Text>
      <Text style={styles.subText}>
        Zoe Saldana was born on June 19, 1978 in Passaic, New Jersey, to Asalia Nazario and Aridio Saldaña. Her father
        was Dominican and her mother is Puerto Rican. She was raised in Queens, New York. When she was 10 years old,
        she and her family moved to the Dominican Republic, where they would live for the next seven years. While
        living there, Zoe discovered a keen interest in performance dance and began her training at the prestigious
        ECOS Espacio de Danza Dance Academy where she learned ballet as well as other dance forms.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  subText: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.bgNeutral400,
    textAlign: 'justify',
    marginTop: 12
  },
});