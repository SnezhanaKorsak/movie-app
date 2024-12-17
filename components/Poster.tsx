import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';
import { PosterType } from '../types';

const { width, height } = Dimensions.get('window');

type Props = {
  poster: PosterType;
}

export function Poster({ poster }: Props) {
  const imageSource = poster ? { uri: poster.url } : require('../assets/no_image.jpg');

  return (
    <View>
      <Image
        source={imageSource}
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