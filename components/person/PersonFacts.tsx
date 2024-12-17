import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';

type Props = {
  facts: Array<{ value: string }>;
}

export function PersonFacts({ facts }: Props) {
  return (
    <View style={styles.factsBlock}>
      <Text style={styles.blockTitle}>Facts</Text>

      {facts.map(({ value }, index) => {
        const output = value.replace(/<a[^>]*>(.*?)<\/a>/g, '$1')
          .replace(/&#\d+;/g, '');
        return (
          <Text key={index} style={styles.subText}>{output}</Text>
        );
      })}
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