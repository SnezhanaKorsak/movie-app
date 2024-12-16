import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

const { width, height } = Dimensions.get('window');

export function Poster() {
  return (
    <View>
      <Image
        source={require('../assets/moviePoster.jpg')}
        style={{
          width,
          height: height * 0.55,
        }}
      />

      <LinearGradient
        colors={['transparent', theme.colors.bgNeutral900Opacity, theme.colors.bgNeutral800]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width,
    height: height * 0.4,
    position: 'absolute',
    bottom: 0,
  }
});