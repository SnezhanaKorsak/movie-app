import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';

const { width, height } = Dimensions.get('window');

export function PersonAvatar() {
  return (
    <View>
      <View style={styles.details}>
        <View style={styles.imageMask}>
          <Image
            source={require('../../assets/actor.jpg')}
            style={styles.avatar}
          />
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.mainText}>Zoe Saldana</Text>
        <Text style={styles.subText}>London, United Kingdom</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});