import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';
import { dateFormat } from '../../utils';

type Props = {
  sex: string;
  birthday: string;
  age: number;
  countAwards: number;
}

export function PersonInfoBlock({ sex, birthday, age, countAwards }: Props) {
  const birthdayFormatted = dateFormat(new Date(birthday));

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoBlock}>
        <Text style={styles.infoMainText}>Пол</Text>
        <Text style={styles.infoSubText}>{sex}</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.infoMainText}>День рождения</Text>
        <Text style={styles.infoSubText}>{birthdayFormatted}</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={[styles.infoMainText]}>Возраст</Text>
        <Text style={styles.infoSubText}>{age}</Text>
      </View>
      <View style={[styles.infoBlock, { borderRightWidth: 0 }]}>
        <Text style={[styles.infoMainText]}>Наград</Text>
        <Text style={styles.infoSubText}>{countAwards}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});