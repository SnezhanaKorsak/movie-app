import { Dimensions, View, StyleSheet  } from 'react-native';
import * as Progress from 'react-native-progress';
import { theme } from '../theme';

const {width, height} = Dimensions.get('window');

export function Loading() {
  return (
    <View style={styles.container}>
        <Progress.CircleSnail
          thickness={12}
          size={160}
          direction='clockwise'
          color={theme.colors.bgPrimary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
})