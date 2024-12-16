import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { theme } from '../theme';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function BackButton() {
  const navigation = useNavigation();

  const goBackHandle = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.icon} onPress={goBackHandle}>
      <ChevronLeftIcon size="28" strokeWidth={2.5} color={theme.colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 10,
    padding: 4,
    backgroundColor: theme.colors.bgPrimary,
  },
});