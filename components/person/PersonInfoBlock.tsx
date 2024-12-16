import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';

export function PersonInfoBlock() {
  return (
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